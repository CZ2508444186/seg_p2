import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hometotal from '../components/hometotal'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Calm Teeming Zebra</title>
        <meta property="og:title" content="Calm Teeming Zebra" />
      </Helmet>
      <Navbar></Navbar>
      <Link to="/" className="home-navlink">
        <Hometotal className="home-home"></Hometotal>
      </Link>
      <Footer></Footer>
    </div>
  )
}

export default Home
