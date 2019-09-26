import React, { useState, useEffect } from 'react'
import fetchJson from '../utils/fetchJson'

const UserRepos = ({ login }) => {
  const [repos, setRepos] = useState(null)
  useEffect(() => {
    fetchJson(`api/users/${login}/repos`).then(setRepos)
  }, [login])

  return (
    <div className="repos">
      {!repos ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>id</th>
              <th>link</th>
            </tr>
          </thead>
          <tbody>
            {repos.map(r => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.id}</td>
                <td>
                  <a href={r.html_url}>{r.html_url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <style jsx>{`
        a {
          color: #067df7;
          text-decoration: none;
        }
        p {
          text-align: center;
        }
        table {
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default UserRepos
