import React, { useState, useEffect } from 'react'
import fetchJson from '../utils/fetchJson'

const UserDetails = ({ login }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetchJson(`api/users/${login}/details`).then(setUser)
  }, [login])

  return (
    <div className="details">
      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>
            <a href={user.html_url}>{user.html_url}</a>
          </p>
          <p>username: {user.login}</p>
          <p>id: {user.id}</p>
          <p>created: {new Date(user.created_at).toLocaleDateString()}</p>
        </>
      )}
      <style jsx>{`
        .details {
          text-align: center;
        }
        a {
          color: #067df7;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default UserDetails
