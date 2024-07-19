import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Writeincome from '../components/writeincome'
import Footer from '../components/footer'
import './income.css'

const Income = (props) => {
  return (
    <div className="income-container">
      <Helmet>
        <title>Income - Calm Teeming Zebra</title>
        <meta property="og:title" content="Income - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      <Writeincome></Writeincome>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default Income
