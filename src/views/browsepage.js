import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Browseco from '../components/browseco'
import Footer from '../components/footer'
import './browsepage.css'

const Browsepage = (props) => {
  return (
    <div className="browsepage-container">
      <Helmet>
        <title>browsepage - Calm Teeming Zebra</title>
        <meta property="og:title" content="browsepage - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name11"></Navbar>
      <Browseco></Browseco>
      <Footer rootClassName="footer-root-class-name11"></Footer>
    </div>
  )
}

export default Browsepage
