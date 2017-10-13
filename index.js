module.exports = function (options) {
  return function (request, response) {
    const securityTxt = Object.keys(options).map(option => {

    })

    resp = `Contact: ${options.contact}\n`
    if (options.encryption) {
      resp += `Encryption: ${options.encryption}\n`
    }
    if (options.acknowledgements) {
      resp += `Acknowledgements: ${options.acknowledgements}`
    }

    response.send(resp)
  }
}
