const usersController = require('../api/users/index')
const userDetailsController = require('../api/users/[username]/details')
const userReposController = require('../api/users/[username]/repos')

const getJson = (controller, query) =>
  new Promise(resolve => {
    const req = { query }
    const res = { json: resolve }
    controller(req, res)
  })

test('list users', async () => {
  const data = await getJson(usersController, { since: 0 })
  expect(data).toMatchSnapshot()
})

test('user details', async () => {
  const data = await getJson(userDetailsController, {
    username: 'vicentedealencar',
  })
  expect(data).toMatchSnapshot()
})

test('user repos', async () => {
  const data = await getJson(userReposController, {
    username: 'vicentedealencar',
  })
  expect(data).toMatchSnapshot()
})
