import { Kind } from "graphql/language"
import { regularExpressionFactory } from ".."

describe(`regularExpressionFactory`, () => {
  const { scalar: AbcScalar, resolver: Abc } = regularExpressionFactory({
    name: `Abc`,
    regex: /^abc$/
  })

  describe(`scalar`, () => {
    it(`exports scalar`, () => {
      expect(AbcScalar).toBe(`scalar Abc`)
    })
  })

  describe(`valid`, () => {
    it(`serialize`, () => {
      expect(Abc.serialize(`abc`)).toBe(`abc`)
    })

    it(`parseValue`, () => {
      expect(Abc.parseValue(`abc`)).toBe(`abc`)
    })

    it(`parseLiteral`, () => {
      expect(Abc.parseLiteral({ value: `abc`, kind: Kind.STRING }, {})).toBe(
        `abc`
      )
    })
  })

  describe(`invalid`, () => {
    describe(`does not match`, () => {
      it(`serialize`, () => {
        expect(() => Abc.serialize(`this does not match`)).toThrow(
          /Value does not match the regular expression/
        )
      })

      it(`parseValue`, () => {
        expect(() => Abc.parseValue(`this does not match`)).toThrow(
          /Value does not match the regular expression/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          Abc.parseLiteral(
            { value: `this does not match`, kind: Kind.STRING },
            {}
          )
        ).toThrow(/Value does not match the regular expression/)
      })
    })

    describe(`not a string`, () => {
      it(`serialize`, () => {
        expect(() => Abc.serialize(123)).toThrow(/Value is not string/)
      })

      it(`parseValue`, () => {
        expect(() => Abc.parseValue(123)).toThrow(/Value is not string/)
      })

      it(`parseLiteral`, () => {
        expect(() =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Abc.parseLiteral({ value: 123, kind: Kind.INT }, {})
        ).toThrow(/Can only validate strings as regular expressions but got a/)
      })
    })
  })
})
