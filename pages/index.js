import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import UsersList from '../components/UsersList'

const Home = () => (
  <div>
    <Head title="Github Users" />
    <Nav />

    <div className="hero">
      <h1 className="title">Github Users API demo!</h1>
      <p className="description">
        Development showcase for a job interview, to get in contact see my
        <a href="https://vicentedealencar.com.br" target="_blank">
          {' '}
          personal website
        </a>
      </p>

      <UsersList />
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
      }
      .title,
      .description {
        text-align: center;
      }
      .description a {
        text-decoration: none;
        color: #067df7;
      }
    `}</style>
  </div>
)

export default Home
