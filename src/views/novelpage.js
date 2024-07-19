import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Novelpageco from '../components/novelpageco'
import Footer from '../components/footer'
import './novelpage.css'

const Novelpage = (props) => {
  return (
    <div className="novelpage-container">
      <Helmet>
        <title>Novelpage - Calm Teeming Zebra</title>
        <meta property="og:title" content="Novelpage - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <Novelpageco></Novelpageco>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Novelpage
