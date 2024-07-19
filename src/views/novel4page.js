import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Novel3pageco from '../components/novel3pageco'
import Footer from '../components/footer'
import './novel4page.css'

const Novel4page = (props) => {
  return (
    <div className="novel4page-container">
      <Helmet>
        <title>novel4page - Calm Teeming Zebra</title>
        <meta property="og:title" content="novel4page - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name14"></Navbar>
      <Novel3pageco></Novel3pageco>
      <Footer rootClassName="footer-root-class-name14"></Footer>
    </div>
  )
}

export default Novel4page
