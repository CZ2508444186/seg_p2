import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Policyco from '../components/policyco'
import Footer from '../components/footer'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>PrivacyPolicy - Calm Teeming Zebra</title>
        <meta
          property="og:title"
          content="PrivacyPolicy - Calm Teeming Zebra"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <Policyco></Policyco>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default PrivacyPolicy
