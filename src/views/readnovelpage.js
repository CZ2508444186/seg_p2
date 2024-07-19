import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Readnovelco from '../components/readnovelco'
import Footer from '../components/footer'
import './readnovelpage.css'

const Readnovelpage = (props) => {
  return (
    <div className="readnovelpage-container">
      <Helmet>
        <title>readnovelpage - Calm Teeming Zebra</title>
        <meta
          property="og:title"
          content="readnovelpage - Calm Teeming Zebra"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <Readnovelco></Readnovelco>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Readnovelpage
