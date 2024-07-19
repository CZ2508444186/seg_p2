import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import SignInco from '../components/sign-inco'
import Footer from '../components/footer'
import './signin.css'

const Signin = (props) => {
  return (
    <div className="signin-container">
      <Helmet>
        <title>Signin - Calm Teeming Zebra</title>
        <meta property="og:title" content="Signin - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <SignInco></SignInco>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Signin
