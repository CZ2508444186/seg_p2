import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Novel4pageco from '../components/novel4pageco'
import Footer from '../components/footer'
import './novel3page.css'

const Novel3page = (props) => {
  return (
    <div className="novel3page-container">
      <Helmet>
        <title>novel3page - Calm Teeming Zebra</title>
        <meta property="og:title" content="novel3page - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name13"></Navbar>
      <Novel4pageco></Novel4pageco>
      <Footer rootClassName="footer-root-class-name13"></Footer>
    </div>
  )
}

export default Novel3page
