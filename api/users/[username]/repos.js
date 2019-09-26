const { fetchUserRepos } = require('../../../utils/gh-proxy')

module.exports = async (req, res) => {
  const { username } = req.query
  const data = await fetchUserRepos(username)
  const repos = data.map(({ id, name, html_url }) => ({ id, name, html_url }))

  res.json(repos)
}
