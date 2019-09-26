const fetchJson = require('./fetchJson')

const baseUrl = 'https://api.github.com/users'

const fetchUsers = (since = 0) => fetchJson(`${baseUrl}?since=${since}`)

const fetchUserDetails = username => fetchJson(`${baseUrl}/${username}`)

const fetchUserRepos = username => fetchJson(`${baseUrl}/${username}/repos`)

module.exports = { fetchUsers, fetchUserDetails, fetchUserRepos }
