import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import fetchJson from '../utils/fetchJson'

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState('api/users')
  const [nextPage, setNextPage] = useState('api/users')
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  useEffect(() => {
    setLoading(true)
    fetchJson(currentPage)
      .then(res => {
        setUsers([...users, ...res.users])
        setNextPage(res.nextPage)
      })
      .finally(() => setLoading(false))
  }, [currentPage])

  const groupSize = 3
  const usersGroups = users.reduce((acc, u) => {
    if (!acc.length || acc[acc.length - 1].length >= groupSize) {
      acc.push([u])
    } else {
      acc[acc.length - 1].push(u)
    }
    return acc
  }, [])

  return (
    <>
      {usersGroups.map((g, i) => (
        <div className="row" key={i}>
          {g.map(u => (
            <Link href={'user?login=' + u.login} key={u.login}>
              <a className="card">
                <h3>{u.login}</h3>
                <p>id &rarr; {u.id}</p>
              </a>
            </Link>
          ))}
        </div>
      ))}
      <div className="row">
        {loading ? (
          <a className="card">
            <h3>Loading...</h3>
          </a>
        ) : (
          <a className="card" onClick={() => setCurrentPage(nextPage)}>
            <h3>Load more &rarr; &rarr; &rarr;</h3>
          </a>
        )}
      </div>

      <style jsx>{`
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
          cursor: pointer;
        }
        .row {
          max-width: 880px;
          margin: 40px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </>
  )
}

export default UsersList
