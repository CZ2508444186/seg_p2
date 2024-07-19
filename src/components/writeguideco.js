import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './writeguideco.css'

const Writeguideco = (props) => {
  return (
    <div className="writeguideco-container">
      <div className="writeguideco-container1">
        <Link to="/" className="writeguideco-navlink button">
          <span className="writeguideco-text">
            <span>H</span>
            <span>ome</span>
          </span>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="writeguideco-image"
          />
        </Link>
      </div>
      <div className="writeguideco-container2">
        <div className="writeguideco-container3">
          <div className="writeguideco-container4">
            <Link to="/write" className="writeguideco-navlink1 button">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="writeguideco-image1"
              />
              <span className="writeguideco-text03">{props.text}</span>
            </Link>
            <Link to="/income" className="writeguideco-navlink2 button">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="writeguideco-image2"
              />
              <span className="writeguideco-text04">{props.text1}</span>
            </Link>
            <Link to="/writingguide" className="writeguideco-navlink3 button">
              <img
                alt={props.imageAlt3}
                src={props.imageSrc3}
                className="writeguideco-image3"
              />
              <span className="writeguideco-text05">{props.text2}</span>
            </Link>
          </div>
        </div>
        <div className="writeguideco-container5">
          <h1 className="writeguideco-text06">
            <span>Writing guide content here</span>
            <br></br>
            <br></br>
          </h1>
        </div>
      </div>
    </div>
  )
}

Writeguideco.defaultProps = {
  text1: 'Income',
  text: 'Dashboard',
  text2: 'Writing Guide',
  imageSrc3: '/quill-drawing-a-line-200h.png',
  imageAlt3: 'image',
  imageSrc1: '/dashboard-200h.png',
  imageSrc2: '/income-200h.png',
  imageAlt: 'image',
  imageAlt1: 'image',
  imageSrc: '/home-200h.png',
  imageAlt2: 'image',
}

Writeguideco.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Writeguideco
