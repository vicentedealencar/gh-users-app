const fetch = require('isomorphic-unfetch')

const fetchJson = async (...x) => {
  const res = await fetch(...x)
  return res.json()
}

module.exports = fetchJson
