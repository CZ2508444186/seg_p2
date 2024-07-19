import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Writepageco from '../components/writepageco'
import Footer from '../components/footer'
import './write.css'

const Write = (props) => {
  return (
    <div className="write-container">
      <Helmet>
        <title>write - Calm Teeming Zebra</title>
        <meta property="og:title" content="write - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <Writepageco></Writepageco>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Write
