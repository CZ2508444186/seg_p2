import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Bookshelfco from '../components/bookshelfco'
import Footer from '../components/footer'
import './bookshelf.css'

const Bookshelf = (props) => {
  return (
    <div className="bookshelf-container">
      <Helmet>
        <title>bookshelf - Calm Teeming Zebra</title>
        <meta property="og:title" content="bookshelf - Calm Teeming Zebra" />
      </Helmet>
      <Navbar></Navbar>
      <Bookshelfco></Bookshelfco>
      <Footer></Footer>
    </div>
  )
}

export default Bookshelf
