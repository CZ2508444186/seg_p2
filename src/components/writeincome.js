import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './writeincome.css'

const Writeincome = (props) => {
  return (
    <div className="writeincome-container">
      <div className="writeincome-container1">
        <Link to="/" className="writeincome-navlink button">
          <span className="writeincome-text">
            <span>H</span>
            <span>ome</span>
          </span>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="writeincome-image"
          />
        </Link>
      </div>
      <div className="writeincome-container2">
        <div className="writeincome-container3">
          <div className="writeincome-container4">
            <Link to="/write" className="writeincome-navlink1 button">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="writeincome-image1"
              />
              <span className="writeincome-text3">{props.text1}</span>
            </Link>
            <Link to="/income" className="writeincome-navlink2 button">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="writeincome-image2"
              />
              <span className="writeincome-text4">{props.text2}</span>
            </Link>
            <Link to="/writingguide" className="writeincome-navlink3 button">
              <img
                alt={props.imageAlt3}
                src={props.imageSrc3}
                className="writeincome-image3"
              />
              <span className="writeincome-text5">{props.text3}</span>
            </Link>
          </div>
        </div>
        <div className="writeincome-container5">
          <span className="writeincome-text6">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

Writeincome.defaultProps = {
  imageSrc: '/home-200h.png',
  text: 'Your Income: 0$',
  text2: 'Income',
  imageAlt: 'image',
  imageSrc3: '/quill-drawing-a-line-200h.png',
  text1: 'Dashboard',
  imageSrc1: '/dashboard-200h.png',
  text3: 'Writing Guide',
  imageAlt1: 'image',
  imageSrc2: '/income-200h.png',
  imageAlt3: 'image',
  imageAlt2: 'image',
}

Writeincome.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc3: PropTypes.string,
  text1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Writeincome
