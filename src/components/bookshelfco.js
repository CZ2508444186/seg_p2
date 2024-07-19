import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './bookshelfco.css'

const Bookshelfco = (props) => {
  return (
    <div className="bookshelfco-container">
      <div className="bookshelfco-container1">
        <Link to="/" className="bookshelfco-navlink button">
          <span className="bookshelfco-text">
            <span>H</span>
            <span>ome</span>
          </span>
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="bookshelfco-image"
          />
        </Link>
        <h1 className="bookshelfco-text3">{props.heading}</h1>
      </div>
      <div className="bookshelfco-container2">
        <button type="button" className="bookshelfco-button button">
          <Link to="/novelpage" className="bookshelfco-navlink1">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="bookshelfco-image1"
            />
          </Link>
        </button>
        <Link to="/novelpage" className="bookshelfco-navlink2">
          <span>Revere</span>
          <span>nd Insanity</span>
        </Link>
      </div>
    </div>
  )
}

Bookshelfco.defaultProps = {
  imageAlt1: 'image',
  imageAlt2: 'image',
  imageSrc1: '/guzhenren-300w.jpg',
  imageSrc: 'ad895943-c3a2-4e9d-a4af-69c450e546cc',
  imageAlt: 'image',
  linkText: 'https://example.com',
  imageSrc2: '/home-200h.png',
  heading: 'Your Books:',
}

Bookshelfco.propTypes = {
  imageAlt1: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  linkText: PropTypes.string,
  imageSrc2: PropTypes.string,
  heading: PropTypes.string,
}

export default Bookshelfco
