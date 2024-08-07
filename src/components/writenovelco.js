import React, { useState }  from 'react'
import { Link, useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import './writenovelco.css'

const Writenovelco = (props) => {
  const [text, setText] = useState('');
  const [entries, setEntries] = useState([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text.trim()) {
      setEntries(prevEntries => [`Book: ${text}`, ...prevEntries]);
      setText('');
    }
  };
  return (
    <div className="writenovelco-container">
      <div className="writenovelco-container1">
        <Link to="/" className="writenovelco-navlink button">
          <span className="writenovelco-text">
            <span>H</span>
            <span>ome</span>
          </span>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="writenovelco-image"
          />
        </Link>
      </div>
      <div className="writenovelco-container2">
        <div className="writenovelco-container3">
          <div className="writenovelco-container4">
            <Link to="/write" className="writenovelco-navlink1 button">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="writenovelco-image1"
              />
              <span className="writenovelco-text3">{props.text1}</span>
            </Link>
            <Link to="/income" className="writenovelco-navlink2 button">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="writenovelco-image2"
              />
              <span className="writenovelco-text4">{props.text2}</span>
            </Link>
            <Link to="/writingguide" className="writenovelco-navlink3 button">
              <img
                alt={props.imageAlt3}
                src={props.imageSrc3}
                className="writenovelco-image3"
              />
              <span className="writenovelco-text5">{props.text3}</span>
            </Link>
          </div>
        </div>
        <div className="writenovelco-container5">
          {/* 显示提交的内容 */}
          {entries.map((entry, index) => (
            <div key={index} className="writenovelco-entry">
              {entry}
            </div>
          ))}
          <textarea
            placeholder={props.textareaPlaceholder}
            className="writenovelco-textarea textarea"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button type="button" className="writenovelco-button button" onClick={handleSubmit}>
            Submit<span className="writenovelco-text6">{props.text}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Writenovelco.defaultProps = {
  imageAlt: 'image',
  text3: 'Writing Guide',
  imageAlt3: 'image',
  imageSrc: './seg_p2/home-200h.png',
  text2: 'Income',
  imageAlt1: 'image',
  text1: 'Dashboard',
  textareaPlaceholder: 'Write here!',
  imageSrc3: './seg_p2/quill-drawing-a-line-200h.png',
  text: 'Submit',
  imageSrc1: './seg_p2/dashboard-200h.png',
  imageAlt2: 'image',
  imageSrc2: './seg_p2/income-200h.png',
}

Writenovelco.propTypes = {
  imageAlt: PropTypes.string,
  text3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
  imageAlt1: PropTypes.string,
  text1: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  imageSrc3: PropTypes.string,
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
}

export default Writenovelco
