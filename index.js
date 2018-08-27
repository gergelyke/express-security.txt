module.exports = function (options) {
  return function (request, response) {
    response.send(
      `Contact: ${options.contact}\nEncryption: ${options.encryption}\nAcknowledgements: ${options.acknowledgements}`
    )
  }
}
