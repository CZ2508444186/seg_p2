import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './forumco.css'

const Forumco = (props) => {
  return (
    <div className="forumco-container">
      <div className="forumco-container1">
        <Link to="/" className="forumco-navlink button">
          <span className="forumco-text">
            <span>H</span>
            <span>ome</span>
          </span>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="forumco-image"
          />
        </Link>
        <h1 className="forumco-text3">{props.heading}</h1>
      </div>
      <div className="forumco-container2">
        <div className="forumco-container3">
          <ul className="forumco-ul list">
            <li className="forumco-li list-item">
              <Link to="/faq" className="forumco-navlink1">
                {props.text1}
              </Link>
            </li>
            <li className="forumco-li1 list-item">
              <Link to="/faq" className="forumco-navlink2">
                {props.text2}
              </Link>
            </li>
            <li className="forumco-li2 list-item">
              <Link to="/faq" className="forumco-navlink3">
                {props.text3}
              </Link>
            </li>
          </ul>
        </div>
        <div className="forumco-container4">
          <ul className="forumco-ul1 list">
            <li className="forumco-li3 list-item">
              <Link to="/faq" className="forumco-navlink4">
                {props.text4}
              </Link>
            </li>
            <li className="forumco-li4 list-item">
              <Link to="/faq" className="forumco-navlink5">
                {props.text5}
              </Link>
            </li>
            <li className="forumco-li5 list-item">
              <div className="forumco-container5">
                <input
                  type="text"
                  id="searchinput"
                  placeholder={props.textinputPlaceholder}
                  className="forumco-textinput button input"
                />
                <button type="button" className="forumco-button button">
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="forumco-image1"
                  />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="forumco-container6">
        <div className="forumco-container7">
          <ul className="forumco-ul2 list">
            <li className="forumco-li6 list-item">
              <a
                href={props.linkText5}
                target="_blank"
                rel="noreferrer noopener"
                className="forumco-link"
              >
                <span>Blog 1</span>
                <br></br>
                <br></br>
              </a>
            </li>
            <li className="forumco-li7 list-item">
              <a
                href={props.linkText6}
                target="_blank"
                rel="noreferrer noopener"
                className="forumco-link1"
              >
                {props.text6}
              </a>
            </li>
            <li className="forumco-li8 list-item">
              <a
                href={props.linkText7}
                target="_blank"
                rel="noreferrer noopener"
                className="forumco-link2"
              >
                {props.text7}
              </a>
            </li>
          </ul>
        </div>
        <div className="forumco-container8">
          <textarea
            id="contact-form-3-message"
            rows="3"
            placeholder={props.textareaPlaceholder}
            className="forumco-textarea thq-input"
          ></textarea>
          <button type="button" className="forumco-button1 button">
            <span className="forumco-text7">{props.text}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Forumco.defaultProps = {
  text4: 'Novel Discussion',
  heading: 'Novel Forum',
  linkText: 'https://example.com',
  text6: 'Blog 2',
  text2: 'Forum Rules',
  imageSrc1: './seg_p2/search-200h.png',
  text7: 'Blog 3',
  linkText4: 'https://example.com',
  linkText6: 'https://example.com',
  linkText3: 'https://example.com',
  linkText1: 'https://example.com',
  text: 'Submit',
  imageSrc: './seg_p2/home-200h.png',
  imageAlt: 'image',
  imageAlt1: 'image',
  linkText5: 'https://example.com',
  text5: 'Latest Chapter Discussion',
  text1: 'Announcements',
  textinputPlaceholder: 'Search',
  linkText2: 'https://example.com',
  text3: 'FAQ',
  textareaPlaceholder: 'Enter your message',
  linkText7: 'https://example.com',
}

Forumco.propTypes = {
  text4: PropTypes.string,
  heading: PropTypes.string,
  linkText: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  imageSrc1: PropTypes.string,
  text7: PropTypes.string,
  linkText4: PropTypes.string,
  linkText6: PropTypes.string,
  linkText3: PropTypes.string,
  linkText1: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  linkText5: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  linkText2: PropTypes.string,
  text3: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  linkText7: PropTypes.string,
}

export default Forumco
