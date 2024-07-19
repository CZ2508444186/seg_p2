import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './readnovelco.css'


const Readnovelco = (props) => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Default background color
  const [fontSize, setFontSize] = useState(16);
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
      <div className="readnovelco-container" style={{backgroundColor}}>
        <div className="readnovelco-container1">
          <Link to="/" className="readnovelco-navlink button">
            <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="readnovelco-image"
            />
            <span className="readnovelco-text">
            <span>H</span>
            <span>ome</span>
          </span>
          </Link>
        </div>
        <div className="readnovelco-container2">
          <h1 className="readnovelco-text03">{props.heading}</h1>
        </div>
        <div className="readnovelco-container3">
          <button type="button" className="readnovelco-button button">
            <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="readnovelco-image1"
            />
            <span className="readnovelco-text04">{props.text1}</span>
          </button>
          <select
              name="Chapter"
              autoComplete="Chapter 1"
              className="readnovelco-select"
          >
            <option value="Chapter 1">Chapter 1</option>
            <option value="Chapter 2">Chapter 2</option>
            <option value="Chapter 3">Chapter 3</option>
          </select>
          <button type="button" className="readnovelco-button1 button">
          <span className="readnovelco-text05">
            <span>Next Chapter</span>
            <br></br>
          </span>
            <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="readnovelco-image2"
            />
          </button>
        </div>

        <div className="readnovelco-container4">
          <div>
            <button onClick={() => changeBackgroundColor('#FFD1DC')}><span className="color-circle"
                                                                           style={{backgroundColor: '#FFD1DC'}}></span>Pale
              Pink
            </button>
            <button onClick={() => changeBackgroundColor('#ADD8E6')}><span className="color-circle"
                                                                           style={{backgroundColor: '#ADD8E6'}}></span>Light
              Blue
            </button>
            <button onClick={() => changeBackgroundColor('#D3D3D3')}><span className="color-circle"
                                                                           style={{backgroundColor: '#D3D3D3'}}></span>Light
              Gray
            </button>
            <button onClick={() => changeBackgroundColor('#FAF0E6')}><span className="color-circle"
                                                                           style={{backgroundColor: '#FAF0E6'}}></span>Linen
            </button>
            <button onClick={() => changeBackgroundColor('#FFFFFF')}><span className="color-circle"
                                                                           style={{backgroundColor: '#FFFFFF'}}></span>White
            </button>

            <button onClick={() => setFontSize(fontSize + 1)}>+ Font Size</button>
            <button onClick={() => setFontSize(fontSize - 1)}>- Font Size</button>
          </div>
        </div>

        <div className="readnovelco-container5">
          <span className="readnovelco-text09" style={{fontSize: `${fontSize}px`}}>{props.text}</span>
        </div>
        <div className="readnovelco-container6">
          <button type="button" className="readnovelco-button2 button">
            <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="readnovelco-image3"
            />
            <span className="readnovelco-text10">{props.text1}</span>
          </button>
          <select
              name="Chapter"
              autoComplete="Chapter 1"
              className="readnovelco-select1"
          >
            <option value="Chapter 1">Chapter 1</option>
            <option value="Chapter 2">Chapter 2</option>
            <option value="Chapter 3">Chapter 3</option>
          </select>
          <button type="button" className="readnovelco-button3 button">
          <span className="readnovelco-text11">
            <span>Next Chapter</span>
            <br></br>
          </span>
            <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="readnovelco-image4"
            />
          </button>
        </div>
      </div>
  )
}

Readnovelco.defaultProps = {
  imageSrc: './seg_p2/home-200h.png',
  imageAlt: 'image',
  imageSrc2: './seg_p2/right-arrow-200h.png',
  text4: 'Change theme and fonts here',
  text1: 'Prev Chapter',
  imageSrc1: './seg_p2/left-arrow-200h.png',
  text: 'Novel content will present here\n',
  imageAlt1: 'image',
  imageAlt2: 'image',
  heading: 'Reverend Insanity',
}

Readnovelco.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc2: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt2: PropTypes.string,
  heading: PropTypes.string,
}

export default Readnovelco
