const { fetchUserDetails } = require('../../../utils/gh-proxy')

module.exports = async (req, res) => {
  const { username } = req.query
  const { id, login, html_url, created_at } = await fetchUserDetails(username)

  res.json({ id, login, html_url, created_at })
}
