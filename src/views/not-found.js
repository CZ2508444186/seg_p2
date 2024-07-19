import React from 'react'

import { Helmet } from 'react-helmet'

import NotFound2 from '../components/not-found2'
import './not-found.css'

const NotFound = (props) => {
    return (
        <div className="page-container">
            <Helmet>
                <title>Page - Calm Teeming Zebra</title>
                <meta property="og:title" content="Page - Calm Teeming Zebra" />
            </Helmet>
            <NotFound2></NotFound2>
        </div>
    )
}

export default NotFound
