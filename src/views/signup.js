import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Signupcp from '../components/signupcp'
import Footer from '../components/footer'
import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>signup - Calm Teeming Zebra</title>
        <meta property="og:title" content="signup - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name7"></Navbar>
      <Signupcp></Signupcp>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default Signup
