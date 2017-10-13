module.exports = function (options) {
  return function (request, response) {
    const securityTxt = Object.keys(options).map(option => {
      
    })
    response.send(
      `Contact: ${options.contact}\nEncryption: ${options.encryption}\nAcknowledgements: ${options.acknowledgements}`
    )
  }
}
