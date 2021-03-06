import { Kind } from "graphql/language"
import { NegativeFloat } from ".."

describe(`NegativeFloat`, () => {
  describe(`valid`, () => {
    describe(`as float`, () => {
      it(`serialize`, () => {
        expect(NegativeFloat.serialize(-123.45)).toBe(-123.45)
      })

      it(`parseValue`, () => {
        expect(NegativeFloat.parseValue(-123.45)).toBe(-123.45)
      })

      it(`parseLiteral`, () => {
        expect(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          NegativeFloat.parseLiteral({ value: -123.45, kind: Kind.FLOAT }, {})
        ).toBe(-123.45)
      })
    })

    describe(`as string`, () => {
      it(`serialize`, () => {
        expect(NegativeFloat.serialize(`-123.45`)).toBe(-123.45)
      })

      it(`parseValue`, () => {
        expect(NegativeFloat.parseValue(`-123.45`)).toBe(-123.45)
      })

      it(`parseLiteral`, () => {
        expect(
          NegativeFloat.parseLiteral({ value: `-123.45`, kind: Kind.FLOAT }, {})
        ).toBe(-123.45)
      })
    })
  })

  describe(`invalid`, () => {
    describe(`null`, () => {
      it(`serialize`, () => {
        expect(() => NegativeFloat.serialize(null)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseValue`, () => {
        expect(() => NegativeFloat.parseValue(null)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          NegativeFloat.parseLiteral({ value: null, kind: Kind.FLOAT }, {})
        ).toThrow(/Value is not a number/)
      })
    })

    describe(`undefined`, () => {
      it(`serialize`, () => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
        expect(() => NegativeFloat.serialize()).toThrow(/Value is not a number/)
      })

      it(`parseValue`, () => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
        expect(() => NegativeFloat.parseValue()).toThrow(
          /Value is not a number/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          NegativeFloat.parseLiteral(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
            { kind: Kind.FLOAT },
            {}
          )
        ).toThrow(/Value is not a number/)
      })
    })

    describe(`zero`, () => {
      describe(`as float`, () => {
        it(`serialize`, () => {
          expect(() => NegativeFloat.serialize(0.0)).toThrow(
            /Value is not a negative number/
          )
        })

        it(`parseValue`, () => {
          expect(() => NegativeFloat.parseValue(0.0)).toThrow(
            /Value is not a negative number/
          )
        })

        it(`parseLiteral`, () => {
          expect(() =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
            NegativeFloat.parseLiteral({ value: 0.0, kind: Kind.FLOAT }, {})
          ).toThrow(/Value is not a negative number/)
        })
      })

      describe(`as string`, () => {
        it(`serialize`, () => {
          expect(() => NegativeFloat.serialize(`0.0`)).toThrow(
            /Value is not a negative number/
          )
        })

        it(`parseValue`, () => {
          expect(() => NegativeFloat.parseValue(`0.0`)).toThrow(
            /Value is not a negative number/
          )
        })

        it(`parseLiteral`, () => {
          expect(() =>
            NegativeFloat.parseLiteral({ value: `0.0`, kind: Kind.FLOAT }, {})
          ).toThrow(/Value is not a negative number/)
        })
      })
    })

    describe(`less than zero`, () => {
      describe(`as float`, () => {
        it(`serialize`, () => {
          expect(() => NegativeFloat.serialize(1.0)).toThrow(
            /Value is not a negative number/
          )
        })

        it(`parseValue`, () => {
          expect(() => NegativeFloat.parseValue(1.0)).toThrow(
            /Value is not a negative number/
          )
        })

        it(`parseLiteral`, () => {
          expect(() =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
            NegativeFloat.parseLiteral({ value: 1.0, kind: Kind.FLOAT }, {})
          ).toThrow(/Value is not a negative number/)
        })
      })

      describe(`as string`, () => {
        it(`serialize`, () => {
          expect(() => NegativeFloat.serialize(`1.0`)).toThrow(
            /Value is not a negative number/
          )
        })

        it(`parseValue`, () => {
          expect(() => NegativeFloat.parseValue(`1.0`)).toThrow(
            /Value is not a negative number/
          )
        })

        it(`parseLiteral`, () => {
          expect(() =>
            NegativeFloat.parseLiteral({ value: `1.0`, kind: Kind.FLOAT }, {})
          ).toThrow(/Value is not a negative number/)
        })
      })
    })

    describe(`infinity`, () => {
      it(`serialize`, () => {
        expect(() => NegativeFloat.serialize(Number.NEGATIVE_INFINITY)).toThrow(
          /Value is not a finite number/
        )
      })

      it(`parseValue`, () => {
        expect(() =>
          NegativeFloat.parseValue(Number.NEGATIVE_INFINITY)
        ).toThrow(/Value is not a finite number/)
      })

      it(`parseLiteral`, () => {
        expect(() =>
          NegativeFloat.parseLiteral(
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
              value: Number.NEGATIVE_INFINITY,
              kind: Kind.FLOAT
            },
            {}
          )
        ).toThrow(/Value is not a finite number/)
      })
    })

    describe(`not a number`, () => {
      it(`serialize`, () => {
        expect(() => NegativeFloat.serialize(`not a number`)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseValue`, () => {
        expect(() => NegativeFloat.parseValue(`not a number`)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          NegativeFloat.parseLiteral(
            {
              value: `not a number`,
              kind: Kind.STRING
            },
            {}
          )
        ).toThrow(
          /Can only validate floating point numbers as negative floating point numbers but got a/
        )
      })
    })

    describe(`NaN`, () => {
      it(`serialize`, () => {
        expect(() => NegativeFloat.serialize(Number.NaN)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseValue`, () => {
        expect(() => NegativeFloat.parseValue(Number.NaN)).toThrow(
          /Value is not a number/
        )
      })

      it(`parseLiteral`, () => {
        expect(() =>
          NegativeFloat.parseLiteral(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
            { value: Number.NaN, kind: Kind.STRING },
            {}
          )
        ).toThrow(
          /Can only validate floating point numbers as negative floating point numbers but got a/
        )
      })
    })
  })
})
