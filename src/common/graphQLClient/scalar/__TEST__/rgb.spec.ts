import { Kind } from "graphql/language"
import { RGB } from ".."

describe(`RGB`, () => {
  describe(`valid`, () => {
    it(`serialize`, () => {
      expect(RGB.serialize(`rgb(255, 0, 153)`)).toEqual(`rgb(255, 0, 153)`)
    })

    it(`parseValue`, () => {
      expect(RGB.parseValue(`rgb(255, 0, 153)`)).toEqual(`rgb(255, 0, 153)`)
    })

    it(`parseLiteral`, () => {
      expect(
        RGB.parseLiteral(
          {
            value: `rgb(255, 0, 153)`,
            kind: Kind.STRING
          },
          {}
        )
      ).toEqual(`rgb(255, 0, 153)`)
    })
  })

  describe(`invalid`, () => {
    describe(`not a valid RGB color`, () => {
      it(`serialize`, () => {
        expect(() => RGB.serialize(123)).toThrow(/Value is not string/)
        expect(() => RGB.serialize(`this is not an rgb color`)).toThrow(
          /Value is not a valid RGB color/
        )
      })

      it(`parseValue`, () => {
        expect(() => RGB.serialize(123)).toThrow(/Value is not string/)
        expect(() => RGB.parseValue(`this is not an rgb color`)).toThrow(
          /Value is not a valid RGB color/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          RGB.parseLiteral({ value: 123, kind: Kind.INT }, {})
        ).toThrow(/Can only validate strings as RGB colors but got a/)

        expect(() =>
          RGB.parseLiteral(
            {
              value: `this is not an rgb color`,
              kind: Kind.STRING
            },
            {}
          )
        ).toThrow(/Value is not a valid RGB color/)
      })
    })
  })
})
