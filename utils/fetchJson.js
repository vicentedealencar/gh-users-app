import fetch from 'isomorphic-unfetch'

const fetchJson = async (...x) => {
  const res = await fetch(...x)
  return res.json()
}

export default fetchJson
