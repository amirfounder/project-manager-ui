const REGEX = {
  ALPHANUMERIC: /^[a-z\s\d0-9]+$/i,
}

const isNotEmpty = (value) => !!value && String(value).trim().length > 0
const isAlphanumeric = (value) => !!value && String(value).match(REGEX.ALPHANUMERIC)

export const validateRequired = (value) => {
  if (isNotEmpty(value)) {
    return ''
  }
  return 'This field is required'
}

export const validateAlphanumeric = (value) => {
  if (isNotEmpty(value)) {
    if (isAlphanumeric(value)) {
      return ''
    }
    return 'Field only accepts alphanumeric characters'
  }
  return 'Field cannot be empty'
}