import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Writeguideco from '../components/writeguideco'
import Footer from '../components/footer'
import './writingguide.css'

const Writingguide = (props) => {
  return (
    <div className="writingguide-container">
      <Helmet>
        <title>writingguide - Calm Teeming Zebra</title>
        <meta property="og:title" content="writingguide - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name9"></Navbar>
      <Writeguideco></Writeguideco>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default Writingguide
