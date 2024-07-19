import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Forumco from '../components/forumco'
import Footer from '../components/footer'
import './forum.css'

const Forum = (props) => {
  return (
    <div className="forum-container">
      <Helmet>
        <title>Forum - Calm Teeming Zebra</title>
        <meta property="og:title" content="Forum - Calm Teeming Zebra" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <Forumco></Forumco>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Forum
