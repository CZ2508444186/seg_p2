import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './writepageco.css'

const Writepageco = (props) => {
  return (
    <div className={`writepageco-container ${props.rootClassName} `}>
      <div className="writepageco-container1">
        <div className="writepageco-container2">
          <Link to="/" className="writepageco-navlink button">
            <span className="writepageco-text">
              <span>H</span>
              <span>ome</span>
            </span>
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="writepageco-image"
            />
          </Link>
        </div>
        <div className="writepageco-container3">
          <div className="writepageco-container4">
            <div className="writepageco-container5">
              <Link to="/write" className="writepageco-navlink1 button">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="writepageco-image1"
                />
                <span className="writepageco-text03">{props.text}</span>
              </Link>
              <Link to="/income" className="writepageco-navlink2 button">
                <img
                  alt={props.imageAlt3}
                  src={props.imageSrc3}
                  className="writepageco-image2"
                />
                <span className="writepageco-text04">{props.text1}</span>
              </Link>
              <Link to="/writingguide" className="writepageco-navlink3 button">
                <img
                  alt={props.imageAlt4}
                  src={props.imageSrc4}
                  className="writepageco-image3"
                />
                <span className="writepageco-text05">{props.text2}</span>
              </Link>
            </div>
          </div>
          <div className="writepageco-container6">
            <h1 className="writepageco-text06">
              <span>No Books Yet!</span>
              <br></br>
              <br></br>
            </h1>
            <Link to="/writenovel" className="writepageco-navlink4 button">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="writepageco-image4"
              />
              <span className="writepageco-text10">
                <span>Write now!</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Writepageco.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  imageSrc1: '/signature-200h.png',
  imageSrc5: '/home-200h.png',
  imageAlt2: 'image',
  imageSrc2: '/dashboard-200h.png',
  text2: 'Writing Guide',
  imageAlt4: 'image',
  text: 'Dashboard',
  imageAlt5: 'image',
  imageSrc: 'ad895943-c3a2-4e9d-a4af-69c450e546cc',
  imageAlt1: 'image',
  text1: 'Income',
  imageSrc3: '/income-200h.png',
  imageSrc4: '/quill-drawing-a-line-200h.png',
  imageAlt3: 'image',
}

Writepageco.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
  text2: PropTypes.string,
  imageAlt4: PropTypes.string,
  text: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  text1: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt3: PropTypes.string,
}

export default Writepageco
