module.exports = function (fields) {
  if (!Object.keys(fields).map(normalizeCase).includes('Contact')) {
    throw new Error('You must include a `contact` property for security.txt')
  }

  const securityTxt = []

  for (const directive in fields) {
    const key = normalizeCase(directive)

    for (const value of ensureArray(fields[directive])) {
      securityTxt.push(`${key}: ${value}`)
    }
  }

  const securityTxtString = securityTxt.join('\n')

  return function (request, response) {
    response.header('Content-Type', 'text/plain')
    response.send(securityTxtString)
  }
}

/**
 * Internal function to convert a string to one where the first
 * character is uppercase, and all subsequent are lowercase.
 *
 * @param {string} string - The string to convert
 * @return {string} The capitalized form of the string
 */
function normalizeCase (string) {
  return string[0].toUpperCase() + string.substr(1).toLowerCase()
}

/**
 * Internal function. Returns arrays as passed, but converts some
 * string X into an array [X] of length 1. For example, "abc" would
 * become ["abc"].
 *
 * @param {string|array} stringOrArray - The string or array to force to an array
 * @return {array} The array form of the argument
 */
function ensureArray (stringOrArray) {
  if (Array.isArray(stringOrArray)) {
    return stringOrArray
  } else {
    return [stringOrArray]
  }
}
