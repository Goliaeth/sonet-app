export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )

export const validators = {
  required(value) {
    return value ? undefined : "Required"
  },
  maxLength(max) {
    return (value) => {
      if ((value !== undefined) & (value !== "")) {
        return value.length <= max
          ? undefined
          : `The message must be no more than ${max} characters. Now - ${value.length}`
      }
    }
  },
}
