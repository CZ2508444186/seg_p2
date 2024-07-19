import React from 'react'

import { Helmet } from 'react-helmet'

import CNnavbar from '../components/c-nnavbar'
import CNnovelco from '../components/c-nnovelco'
import CNfooter from '../components/c-nfooter'
import './c-nnovelpage.css'

const CNnovelpage = (props) => {
  return (
    <div className="c-nnovelpage-container">
      <Helmet>
        <title>CNnovelpage - Calm Teeming Zebra</title>
        <meta property="og:title" content="CNnovelpage - Calm Teeming Zebra" />
      </Helmet>
      <CNnavbar></CNnavbar>
      <CNnovelco></CNnovelco>
      <CNfooter></CNfooter>
    </div>
  )
}

export default CNnovelpage
