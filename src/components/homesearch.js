import React from 'react'

import PropTypes from 'prop-types'

import './homesearch.css'

const Homesearch = (props) => {
  return (
    <div className="homesearch-container">
      <div className="homesearch-container1">
        <div className="homesearch-container2">
          <h1 className="homesearch-text">
            <span className="homesearch-text1">Novel Genre</span>
            <br></br>
          </h1>
        </div>
        <div className="homesearch-container3">
          <input
            type="text"
            id="searchinput"
            placeholder={props.textinputPlaceholder}
            className="homesearch-textinput button input"
          />
          <button type="button" className="homesearch-button button">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="homesearch-image"
            />
          </button>
        </div>
        <div className="homesearch-container4"></div>
      </div>
    </div>
  )
}

Homesearch.defaultProps = {
  imageAlt: 'image',
  textinputPlaceholder: 'Search',
  imageSrc: '/search-200h.png',
}

Homesearch.propTypes = {
  imageAlt: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Homesearch
