import { Kind } from "graphql/language"
import { DateTime } from ".."

describe(`DateTime`, () => {
  describe(`valid`, () => {
    it(`serialize`, () => {
      const now = new Date()
      expect(DateTime.serialize(now)).toEqual(now.toJSON())
    })

    it(`serialize (String)`, () => {
      const now = `2018-07-24T01:28:47.940Z`
      const d1 = Date.parse(now)
      const d2 = new Date()

      d2.setTime(d1)

      expect(DateTime.serialize(now)).toEqual(d2.toJSON())
    })

    it(`parseValue`, () => {
      const now = new Date()
      expect(DateTime.parseValue(now)).toEqual(now)
    })

    it(`parseLiteral`, () => {
      const result = new Date(Date.UTC(2021, 0, 2, 3, 4, 5, 0))
      expect(
        DateTime.parseLiteral(
          {
            value: `2021-01-02T03:04:05.000Z`,
            kind: Kind.STRING
          },
          {}
        )
      ).toEqual(result)
    })
  })

  describe(`invalid`, () => {
    describe(`not a valid date`, () => {
      it(`serialize`, () => {
        expect(() => DateTime.serialize(`this is not a date`)).toThrow(
          /Value is not a valid Date/
        )
      })

      it(`parseValue`, () => {
        expect(() => DateTime.parseValue(`this is not a date`)).toThrow(
          /Value is not a valid Date/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          DateTime.parseLiteral({ value: 123, kind: Kind.INT }, {})
        ).toThrow(/Can only parse strings to dates but got a/)

        expect(() =>
          DateTime.parseLiteral(
            {
              value: `this is not a date`,
              kind: Kind.STRING
            },
            {}
          )
        ).toThrow(/Value is not a valid Date/)
      })
    })
  })
})
