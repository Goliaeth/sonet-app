// export const composeValidators =
//   (...validators) =>
//   (value) =>
//     validators.reduce(
//       (error, validator) => error || validator(value),
//       undefined
//     )

// export type FieldValidatorType = (value: string) => string | undefined
export const validators = {
  required(value: string): string | undefined {
    return value ? undefined : "Required"
  },
  maxLength (max: number) {
    return (value: string): string | undefined => {
      if ((value !== undefined) && (value !== "")) {
        return value.length <= max
          ? undefined
          : `The message must be no more than ${max} characters. Now - ${value.length}`
      }
    }
  },
}
