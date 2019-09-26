import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import UserDetails from '../components/UserDetails'
import UserRepos from '../components/UserRepos'
import { useRouter } from 'next/router'

const UserPage = () => {
  const router = useRouter()
  const { login } = router.query

  return (
    <div>
      <Head title="Github Users" />
      <Nav />

      <div className="hero">
        <h1 className="title">This is {login}</h1>

        <UserDetails login={login} />
        <hr />
        <UserRepos login={login} />
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default UserPage
