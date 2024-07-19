import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './c-nfooter.css'

const CNfooter = (props) => {
  return (
    <div className="c-nfooter-max-width thq-section-max-width">
      <a
        href={props.linkLink}
        target="_blank"
        rel="noreferrer noopener"
        className="c-nfooter-link"
      >
        {props.link}
      </a>
      <div className="c-nfooter-content">
        <div className="c-nfooter-logo"></div>
        <div className="c-nfooter-links">
          <Link to="/faq" className="c-nfooter-navlink thq-body-small">
            {props.text}
          </Link>
          <Link
            to="/privacy-policy"
            className="c-nfooter-navlink1 thq-body-small"
          >
            {props.text1}
          </Link>
        </div>
      </div>
      <div className="c-nfooter-credits">
        <div className="thq-divider-horizontal"></div>
        <div className="c-nfooter-row">
          <div className="c-nfooter-container">
            <span className="thq-body-small">{props.text2}</span>
          </div>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="c-nfooter-image"
          />
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="c-nfooter-image1"
          />
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="c-nfooter-image2"
          />
          <div className="c-nfooter-footer-links"></div>
        </div>
      </div>
    </div>
  )
}

CNfooter.defaultProps = {
  imageAlt1: 'image',
  linkLink: '',
  text: '帮助中心',
  imageSrc: './seg_p2/facebook-200h.png',
  imageSrc1: './seg_p2/twitter-200h.png',
  imageAlt: 'image',
  text1: '隐私政策',
  imageAlt2: 'image',
  link: '终点文学网',
  imageSrc2: './seg_p2/instagram-200h.png',
  text2: '© 2024 Destination Literature',
}

CNfooter.propTypes = {
  imageAlt1: PropTypes.string,
  linkLink: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
  imageAlt2: PropTypes.string,
  link: PropTypes.string,
  imageSrc2: PropTypes.string,
  text2: PropTypes.string,
}

export default CNfooter
