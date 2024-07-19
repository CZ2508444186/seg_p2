import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Novel2pageco from '../components/novel2pageco'
import Footer from '../components/footer'
import './novel2page.css'

const Novel2page = (props) => {
  return (
    <div className="novel2page-container">
      <Helmet>
        <title>novel2page - Calm Teeming Zebra</title>
        <meta property="og:title" content="novel2page - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name12"></Navbar>
      <Novel2pageco></Novel2pageco>
      <Footer rootClassName="footer-root-class-name12"></Footer>
    </div>
  )
}

export default Novel2page
