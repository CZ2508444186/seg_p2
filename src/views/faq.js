import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FAQco from '../components/fa-qco'
import Footer from '../components/footer'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ - Calm Teeming Zebra</title>
        <meta property="og:title" content="FAQ - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      <FAQco></FAQco>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default FAQ
