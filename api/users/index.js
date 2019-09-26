const { fetchUsers } = require('../../utils/gh-proxy')

module.exports = async (req, res) => {
  const { since } = req.query
  const data = await fetchUsers(since)
  const users = data.map(({ id, login }) => ({ id, login }))
  const lastUserId = users[users.length - 1].id

  res.json({ users, nextPage: `api/users?since=${lastUserId}` })
}
