import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './homecomponent1.css'

const Homecomponent1 = (props) => {
  return (
    <div className="homecomponent1-container">
      <div className="homecomponent1-container1">
        <ul className="homecomponent1-ul list">
          <li className="homecomponent1-li list-item">
            <Link to="/browsepage"
              className="homecomponent1-link"
            >
              {props.text1}
            </Link>
            <img
              alt={props.imageAlt6}
              src={props.imageSrc6}
              className="homecomponent1-image"
            />
          </li>
          <li className="homecomponent1-li01 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link01"
            >
              {props.text2}
            </Link>
            <img
              alt={props.imageAlt7}
              src={props.imageSrc7}
              className="homecomponent1-image01"
            />
          </li>
          <li className="homecomponent1-li02 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link02"
            >
              {props.text3}
            </Link>
            <img
              alt={props.imageAlt9}
              src={props.imageSrc9}
              className="homecomponent1-image02"
            />
          </li>
          <li className="homecomponent1-li03 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link03"
            >
              {props.text4}
            </Link>
            <img
              alt={props.imageAlt11}
              src={props.imageSrc11}
              className="homecomponent1-image03"
            />
          </li>
          <li className="homecomponent1-li04 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link04"
            >
              {props.text5}
            </Link>
            <img
              alt={props.imageAlt13}
              src={props.imageSrc13}
              className="homecomponent1-image04"
            />
          </li>
          <li className="homecomponent1-li05 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link05"
            >
              {props.text6}
            </Link>
            <img
              alt={props.imageAlt15}
              src={props.imageSrc15}
              className="homecomponent1-image05"
            />
          </li>
        </ul>
      </div>
      <div className="homecomponent1-container2">
        <ul className="homecomponent1-ul1 list">
          <li className="homecomponent1-li06 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link06"
            >
              {props.text7}
            </Link>
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="homecomponent1-image06"
            />
          </li>
          <li className="homecomponent1-li07 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link07"
            >
              {props.text8}
            </Link>
            <img
              alt={props.imageAlt8}
              src={props.imageSrc8}
              className="homecomponent1-image07"
            />
          </li>
          <li className="homecomponent1-li08 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link08"
            >
              {props.text9}
            </Link>
            <img
              alt={props.imageAlt10}
              src={props.imageSrc10}
              className="homecomponent1-image08"
            />
          </li>
          <li className="homecomponent1-li09 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link09"
            >
              {props.text10}
            </Link>
            <img
              alt={props.imageAlt12}
              src={props.imageSrc12}
              className="homecomponent1-image09"
            />
          </li>
          <li className="homecomponent1-li10 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link10"
            >
              {props.text11}
            </Link>
            <img
              alt={props.imageAlt14}
              src={props.imageSrc14}
              className="homecomponent1-image10"
            />
          </li>
          <li className="homecomponent1-li11 list-item">
            <Link to="/browsepage"
              className="homecomponent1-link11"
            >
              {props.text12}
            </Link>
            <img
              alt={props.imageAlt16}
              src={props.imageSrc16}
              className="homecomponent1-image11"
            />
          </li>
        </ul>
      </div>
      <div className="homecomponent1-container3">
        <div className="homecomponent1-container4">
          <button type="button" className="homecomponent1-button button">
            <Link to="/novelpage" className="homecomponent1-navlink">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="homecomponent1-image12"
              />
            </Link>
          </button>
          <Link to="/novelpage" className="homecomponent1-navlink1">
            <span>Revere</span>
            <span>nd Insanity</span>
          </Link>
        </div>
        <div className="homecomponent1-container5">
          <button type="button" className="homecomponent1-button1 button">
            <Link to="/novel2page" className="homecomponent1-navlink2">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="homecomponent1-image13"
              />
            </Link>
          </button>
          <div className="homecomponent1-container6">
            <Link to="/novel2page" className="homecomponent1-link12">
              {props.text13}
            </Link>
          </div>
        </div>
        <div className="homecomponent1-container7">
          <button type="button" className="homecomponent1-button2 button">
            <Link to="/novel3page" className="homecomponent1-navlink3">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="homecomponent1-image14"
              />
            </Link>
          </button>
          <Link to="/novel3page" className="homecomponent1-navlink4">
            {props.text}
          </Link>
        </div>
        <div className="homecomponent1-container8">
          <button type="button" className="homecomponent1-button3 button">
            <Link to="/novel4page" className="homecomponent1-navlink5">
              <img
                alt={props.imageAlt3}
                src={props.imageSrc3}
                className="homecomponent1-image15"
              />
            </Link>
          </button>
          <Link to="/novel4page" className="homecomponent1-navlink6">
            Beyond the Timescape
          </Link>
        </div>
      </div>
    </div>
  )
}

Homecomponent1.defaultProps = {
  linkText10: '1',
  imageAlt10: 'image',
  imageAlt11: 'image',
  text13: 'I Shall Seal the Heavens',
  imageSrc4: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc2: './seg_p2/fanren-300w.jpg',
  imageSrc11: './seg_p2/group-200h.png',
  imageSrc8: './seg_p2/dragon-200h.png',
  imageSrc15: './seg_p2/masks-200h.png',
  imageAlt7: 'image',
  text: 'A Record of a Mortal’s Journey to Immortality',
  text8: 'Xuanhuan',
  imageSrc12: './seg_p2/stone-200h.png',
  linkText16: 'https://example.com',
  text10: 'Historical',
  linkText5: 'https://example.com',
  text7: 'Fantasy',
  text4: 'Harem',
  imageSrc16: './seg_p2/wrench-200h.png',
  imageSrc3: './seg_p2/guangy-300w.jpg',
  linkText: 'https://example.com',
  imageAlt14: 'image',
  linkText13: 'https://example.com',
  imageSrc1: './seg_p2/woyufengtian-300w.jpg',
  imageAlt9: 'image',
  text6: 'Comedy',
  imageSrc9: './seg_p2/city-200h.png',
  text12: 'Mecha',
  imageAlt12: 'image',
  imageAlt: 'image',
  imageAlt8: 'image',
  linkText12: 'https://example.com',
  linkText15: 'https://example.com',
  linkText9: 'https://example.com',
  linkText14: '/novelpage',
  imageSrc: './seg_p2/guzhenren-300w.jpg',
  imageAlt1: 'image',
  text9: 'Horror',
  text5: 'School Life',
  imageSrc10: './seg_p2/ghost-200h.png',
  imageAlt6: 'image',
  imageSrc14: './seg_p2/molecule-200h.png',
  text1: 'Wuxia',
  imageSrc5: './seg_p2/storytelling-200h.png',
  linkText11: 'https://example.com',
  text11: 'Sci-fi',
  linkText1: 'https://example.com',
  imageAlt5: 'image',
  text2: 'Xianxia',
  imageSrc7: './seg_p2/yang-200h.png',
  linkText2: 'https://example.com',
  linkText7: 'https://example.com',
  imageAlt15: 'image',
  linkText4: 'https://example.com',
  imageSrc6: './seg_p2/bamboo-200h.png',
  linkText3: 'https://example.com',
  imageAlt3: 'image',
  imageSrc13: './seg_p2/open-book-200h.png',
  linkText8: 'https://example.com',
  text3: 'Urban',
  imageAlt2: 'image',
  linkText6: 'https://example.com',
  imageAlt4: 'image',
  imageAlt16: 'image',
  imageAlt13: 'image',
}

Homecomponent1.propTypes = {
  linkText10: PropTypes.string,
  imageAlt10: PropTypes.string,
  imageAlt11: PropTypes.string,
  text13: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageSrc8: PropTypes.string,
  imageSrc15: PropTypes.string,
  imageAlt7: PropTypes.string,
  text: PropTypes.string,
  text8: PropTypes.string,
  imageSrc12: PropTypes.string,
  linkText16: PropTypes.string,
  text10: PropTypes.string,
  linkText5: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  imageSrc16: PropTypes.string,
  imageSrc3: PropTypes.string,
  linkText: PropTypes.string,
  imageAlt14: PropTypes.string,
  linkText13: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt9: PropTypes.string,
  text6: PropTypes.string,
  imageSrc9: PropTypes.string,
  text12: PropTypes.string,
  imageAlt12: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt8: PropTypes.string,
  linkText12: PropTypes.string,
  linkText15: PropTypes.string,
  linkText9: PropTypes.string,
  linkText14: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  text9: PropTypes.string,
  text5: PropTypes.string,
  imageSrc10: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageSrc14: PropTypes.string,
  text1: PropTypes.string,
  imageSrc5: PropTypes.string,
  linkText11: PropTypes.string,
  text11: PropTypes.string,
  linkText1: PropTypes.string,
  imageAlt5: PropTypes.string,
  text2: PropTypes.string,
  imageSrc7: PropTypes.string,
  linkText2: PropTypes.string,
  linkText7: PropTypes.string,
  imageAlt15: PropTypes.string,
  linkText4: PropTypes.string,
  imageSrc6: PropTypes.string,
  linkText3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc13: PropTypes.string,
  linkText8: PropTypes.string,
  text3: PropTypes.string,
  imageAlt2: PropTypes.string,
  linkText6: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt16: PropTypes.string,
  imageAlt13: PropTypes.string,
}

export default Homecomponent1
