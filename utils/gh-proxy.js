import fetchJson from './fetchJson'

const baseUrl = 'https://api.github.com/users'

export const fetchUsers = (since = 0) => fetchJson(`${baseUrl}?since=${since}`)

export const fetchUserDetails = username => fetchJson(`${baseUrl}/${username}`)

export const fetchUserRepos = username =>
  fetchJson(`${baseUrl}/${username}/repos`)
