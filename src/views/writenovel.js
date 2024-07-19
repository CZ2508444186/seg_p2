import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Writenovelco from '../components/writenovelco'
import Footer from '../components/footer'
import './writenovel.css'

const Writenovel = (props) => {
  return (
    <div className="writenovel-container">
      <Helmet>
        <title>writenovel - Calm Teeming Zebra</title>
        <meta property="og:title" content="writenovel - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name10"></Navbar>
      <Writenovelco></Writenovelco>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  )
}

export default Writenovel
