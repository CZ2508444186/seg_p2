import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer-max-width thq-section-max-width">
        <span className="footer-link">DESTINATION LITERATURE</span>
        <div className="footer-content">
          <div className="footer-logo"></div>
          <div className="footer-links">
            <Link to="/faq" className="footer-navlink thq-body-small">
              {props.link3}
            </Link>
            <Link
              to="/privacy-policy"
              className="footer-navlink1 thq-body-small"
            >
              {props.link5}
            </Link>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <div className="footer-container">
              <span className="thq-body-small">
                © 2024 Destination Literature
              </span>
            </div>
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="footer-image"
            />
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="footer-image1"
            />
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="footer-image2"
            />
            <div className="footer-footer-links"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc4: './seg_p2/instagram-400h.png',
  rootClassName: '',
  cookiesLink: 'Cookies Policy',
  link5: 'Privacy Policy',
  imageAlt: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt1: 'image',
  imageAlt2: 'image',
  link2: 'Contact Us',
  termsLink: 'Terms and Conditions',
  link1: 'About Us',
  privacyLink: 'Privacy Policy',
  logoAlt: 'NovelsRUs Logo',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  imageAlt4: 'image',
  imageAlt3: 'image',
  link3: 'FAQ',
  imageSrc2: './seg_p2/facebook-400h.png',
  link4: 'Terms and Conditions',
  imageSrc3: './seg_p2/twitter-400h.png',
  heading: 'Heading',
}

Footer.propTypes = {
  imageSrc: PropTypes.string,
  imageSrc4: PropTypes.string,
  rootClassName: PropTypes.string,
  cookiesLink: PropTypes.string,
  link5: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt2: PropTypes.string,
  link2: PropTypes.string,
  termsLink: PropTypes.string,
  link1: PropTypes.string,
  privacyLink: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt3: PropTypes.string,
  link3: PropTypes.string,
  imageSrc2: PropTypes.string,
  link4: PropTypes.string,
  imageSrc3: PropTypes.string,
  heading: PropTypes.string,
}

export default Footer
