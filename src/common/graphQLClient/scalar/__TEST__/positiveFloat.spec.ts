import { Kind } from "graphql/language"
import { PositiveFloat } from ".."

describe(`PositiveFloat`, () => {
  describe(`valid`, () => {
    describe(`as float`, () => {
      it(`serialize`, () => {
        expect(PositiveFloat.serialize(123.45)).toBe(123.45)
      })

      it(`parseValue`, () => {
        expect(PositiveFloat.parseValue(123.45)).toBe(123.45)
      })

      it(`parseLiteral`, () => {
        expect(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          PositiveFloat.parseLiteral({ value: 123.45, kind: Kind.FLOAT }, {})
        ).toBe(123.45)
      })
    })

    describe(`as string`, () => {
      it(`serialize`, () => {
        expect(PositiveFloat.serialize(`123.45`)).toBe(123.45)
      })

      it(`parseValue`, () => {
        expect(PositiveFloat.parseValue(`123.45`)).toBe(123.45)
      })

      it(`parseLiteral`, () => {
        expect(
          PositiveFloat.parseLiteral({ value: `123.45`, kind: Kind.FLOAT }, {})
        ).toBe(123.45)
      })
    })
  })

  describe(`invalid`, () => {
    describe(`null`, () => {
      it(`serialize`, () => {
        expect(() => PositiveFloat.serialize(null)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseValue`, () => {
        expect(() => PositiveFloat.parseValue(null)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          PositiveFloat.parseLiteral({ value: null, kind: Kind.FLOAT }, {})
        ).toThrow(/Value is not a number/)
      })
    })

    describe(`undefined`, () => {
      it(`serialize`, () => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
        expect(() => PositiveFloat.serialize()).toThrow(/Value is not a number/)
      })

      it(`parseValue`, () => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
        expect(() => PositiveFloat.parseValue()).toThrow(
          /Value is not a number/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          PositiveFloat.parseLiteral({ kind: Kind.FLOAT }, {})
        ).toThrow(/Value is not a number/)
      })
    })

    describe(`zero`, () => {
      describe(`as float`, () => {
        it(`serialize`, () => {
          expect(() => PositiveFloat.serialize(0.0)).toThrow(
            /Value is not a positive number/
          )
        })

        it(`parseValue`, () => {
          expect(() => PositiveFloat.parseValue(0.0)).toThrow(
            /Value is not a positive number/
          )
        })

        it(`parseLiteral`, () => {
          expect(() =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
            PositiveFloat.parseLiteral({ value: 0.0, kind: Kind.FLOAT }, {})
          ).toThrow(/Value is not a positive number/)
        })
      })

      describe(`as string`, () => {
        it(`serialize`, () => {
          expect(() => PositiveFloat.serialize(`0.0`)).toThrow(
            /Value is not a positive number/
          )
        })

        it(`parseValue`, () => {
          expect(() => PositiveFloat.parseValue(`0.0`)).toThrow(
            /Value is not a positive number/
          )
        })

        it(`parseLiteral`, () => {
          expect(() =>
            PositiveFloat.parseLiteral({ value: `0.0`, kind: Kind.FLOAT }, {})
          ).toThrow(/Value is not a positive number/)
        })
      })
    })

    describe(`less than zero`, () => {
      describe(`as float`, () => {
        it(`serialize`, () => {
          expect(() => PositiveFloat.serialize(-1.0)).toThrow(
            /Value is not a positive number/
          )
        })

        it(`parseValue`, () => {
          expect(() => PositiveFloat.parseValue(-1.0)).toThrow(
            /Value is not a positive number/
          )
        })

        it(`parseLiteral`, () => {
          expect(() =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
            PositiveFloat.parseLiteral({ value: -1.0, kind: Kind.FLOAT }, {})
          ).toThrow(/Value is not a positive number/)
        })
      })

      describe(`as string`, () => {
        it(`serialize`, () => {
          expect(() => PositiveFloat.serialize(`-1.0`)).toThrow(
            /Value is not a positive number/
          )
        })

        it(`parseValue`, () => {
          expect(() => PositiveFloat.parseValue(`-1.0`)).toThrow(
            /Value is not a positive number/
          )
        })

        it(`parseLiteral`, () => {
          expect(() =>
            PositiveFloat.parseLiteral({ value: `-1.0`, kind: Kind.FLOAT }, {})
          ).toThrow(/Value is not a positive number/)
        })
      })
    })

    describe(`infinity`, () => {
      it(`serialize`, () => {
        expect(() => PositiveFloat.serialize(Number.POSITIVE_INFINITY)).toThrow(
          /Value is not a finite number/
        )
      })

      it(`parseValue`, () => {
        expect(() =>
          PositiveFloat.parseValue(Number.POSITIVE_INFINITY)
        ).toThrow(/Value is not a finite number/)
      })

      it(`parseLiteral`, () => {
        expect(() =>
          PositiveFloat.parseLiteral(
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
              value: Number.POSITIVE_INFINITY,
              kind: Kind.FLOAT
            },
            {}
          )
        ).toThrow(/Value is not a finite number/)
      })
    })

    describe(`not a number`, () => {
      it(`serialize`, () => {
        expect(() => PositiveFloat.serialize(`not a number`)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseValue`, () => {
        expect(() => PositiveFloat.parseValue(`not a number`)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          PositiveFloat.parseLiteral(
            {
              value: `not a number`,
              kind: Kind.STRING
            },
            {}
          )
        ).toThrow(
          /Can only validate floating point numbers as positive floating point numbers but got a/
        )
      })
    })

    describe(`NaN`, () => {
      it(`serialize`, () => {
        expect(() => PositiveFloat.serialize(Number.NaN)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseValue`, () => {
        expect(() => PositiveFloat.parseValue(Number.NaN)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          PositiveFloat.parseLiteral(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
            { value: Number.NaN, kind: Kind.STRING },
            {}
          )
        ).toThrow(
          /Can only validate floating point numbers as positive floating point numbers but got a/
        )
      })
    })
  })
})
