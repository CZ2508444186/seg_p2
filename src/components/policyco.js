import React from 'react'

import PropTypes from 'prop-types'

import './policyco.css'

const Policyco = (props) => {
  return (
    <div className="policyco-container">
      <div className="policyco-container1">
        <h1 className="policyco-text">{props.heading1}</h1>
      </div>
      <span className="policyco-text1">
        <span>Policy Content</span>
        <br></br>
      </span>
      <h1 className="policyco-text4">{props.heading}</h1>
      <span className="policyco-text5">
        <span> Content</span>
        <br></br>
      </span>
    </div>
  )
}

Policyco.defaultProps = {
  heading: 'Copyright Infringement Statement',
  heading1: 'Privacy Policy',
}

Policyco.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default Policyco
