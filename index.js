module.exports = function (options) {
  return function (request, response) {
    let resp = `Contact: ${options.contact}\n`
    if (options.encryption) {
      resp += `Encryption: ${options.encryption}\n`
    }
    if (options.acknowledgements) {
      resp += `Acknowledgements: ${options.acknowledgements}`
    }

    response.send(resp)
  }
}
