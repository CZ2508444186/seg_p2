import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './not-foundco.css'

const NotFoundco = (props) => {
  return (
    <div className="not-foundco-container thq-section-padding">
      <div className="not-foundco-container1">
        <h1 className="not-foundco-text thq-heading-1">404</h1>
        <h2 className="not-foundco-text1 thq-heading-2">{props.heading2}</h2>
        <Link
          to="/"
          className="not-foundco-button thq-button-filled thq-button-outline"
        >
          <span className="thq-body-small">{props.action1}</span>
        </Link>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="not-foundco-image"
      />
      <div className="not-foundco-container2"></div>
    </div>
  )
}

NotFoundco.defaultProps = {
  image1Alt: 'image',
  heading2: 'Page not found',
  image1Src: '/huangshan-mountains-5053221_1920-1600w.jpg',
  action1: 'Back to homepage',
}

NotFoundco.propTypes = {
  image1Alt: PropTypes.string,
  heading2: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
}

export default NotFoundco
