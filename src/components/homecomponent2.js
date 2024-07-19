import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './homecomponent2.css'

const Homecomponent2 = (props) => {
  return (
    <div className="homecomponent2-container">
      <div className="homecomponent2-container1">
        <ul className="homecomponent2-ul list">
          <li className="homecomponent2-li list-item">
            <span className="homecomponent2-text">{props.text}</span>
          </li>
          <li className="homecomponent2-li01 list-item">
            <span className="homecomponent2-text01">{props.text1}</span>
            <Link to="/novelpage" className="homecomponent2-navlink">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li02 list-item">
            <span className="homecomponent2-text04">{props.text2}</span>
            <Link to="/novelpage" className="homecomponent2-navlink01">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li03 list-item">
            <span className="homecomponent2-text07">{props.text3}</span>
            <Link to="/novelpage" className="homecomponent2-navlink02">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li04 list-item">
            <span className="homecomponent2-text10">{props.text4}</span>
            <Link to="/novelpage" className="homecomponent2-navlink03">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li05 list-item">
            <span className="homecomponent2-text13">{props.text5}</span>
            <Link to="/novelpage" className="homecomponent2-navlink04">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li06 list-item">
            <span className="homecomponent2-text16">{props.text6}</span>
            <Link to="/novelpage" className="homecomponent2-navlink05">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li07 list-item">
            <span className="homecomponent2-text19">{props.text7}</span>
            <Link to="/novelpage" className="homecomponent2-navlink06">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
        </ul>
      </div>
      <div className="homecomponent2-container2">
        <li className="homecomponent2-li08 list-item">
          <span className="homecomponent2-text22">
            <span>The Latest Novels</span>
            <br></br>
          </span>
        </li>
        <div className="homecomponent2-container3">
          <div className="homecomponent2-container4">
            <div className="homecomponent2-container5">
              <button type="button" className="homecomponent2-button button">
                <Link to="/novelpage" className="homecomponent2-navlink07">
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="homecomponent2-image"
                  />
                </Link>
              </button>
              <Link to="/novelpage" className="homecomponent2-navlink08">
                <span>Revere</span>
                <span>nd Insanity</span>
              </Link>
            </div>
            <div className="homecomponent2-container6">
              <button type="button" className="homecomponent2-button1 button">
                <Link to="/novel2page" className="homecomponent2-navlink09">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="homecomponent2-image1"
                  />
                </Link>
              </button>
              <Link to="/novel2page" className="homecomponent2-navlink10">
                I Shall Seal the Heavens
              </Link>
            </div>
          </div>
          <div className="homecomponent2-container7">
            <button type="button" className="homecomponent2-button2 button">
              <Link to="/novel3page" className="homecomponent2-navlink11">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="homecomponent2-image2"
                />
              </Link>
            </button>
            <Link to="/novel3page" className="homecomponent2-navlink12">
              {props.text8}
            </Link>
          </div>
        </div>
      </div>
      <div className="homecomponent2-container8">
        <ul className="homecomponent2-ul1 list">
          <li className="homecomponent2-li09 list-item">
            <span className="homecomponent2-text27">
              <span>Power Ranking</span>
              <br></br>
            </span>
          </li>
          <li className="homecomponent2-li10 list-item">
            <span className="homecomponent2-text30">{props.text9}</span>
            <Link to="/novelpage" className="homecomponent2-navlink13">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li11 list-item">
            <span className="homecomponent2-text33">{props.text10}</span>
            <Link to="/novelpage" className="homecomponent2-navlink14">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li12 list-item">
            <span className="homecomponent2-text36">{props.text11}</span>
            <Link to="/novelpage" className="homecomponent2-navlink15">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li13 list-item">
            <span className="homecomponent2-text39">{props.text12}</span>
            <Link to="/novelpage" className="homecomponent2-navlink16">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li14 list-item">
            <span className="homecomponent2-text42">{props.text13}</span>
            <Link to="/novelpage" className="homecomponent2-navlink17">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li15 list-item">
            <span className="homecomponent2-text45">{props.text14}</span>
            <Link to="/novelpage" className="homecomponent2-navlink18">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
          <li className="homecomponent2-li16 list-item">
            <span className="homecomponent2-text48">{props.text15}</span>
            <Link to="/novelpage" className="homecomponent2-navlink19">
              <span>Reverend Insanity</span>
              <br></br>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

Homecomponent2.defaultProps = {
  text4: '[Xianxia]',
  linkText14: 'https://example.com',
  text7: '[Xianxia]\n',
  linkText16: 'https://example.com',
  text1: '[Xianxia]\n',
  text8: 'A Record of a Mortal’s Journey to Immortality',
  linkText3: 'https://example.com',
  text: "This week's Recommendations",
  imageSrc1: '/guzhenren-300w.jpg',
  imageAlt2: 'image',
  text3: '[Xianxia]\n',
  linkText2: 'https://example.com',
  text15: '[Xianxia]\n',
  text9: '[Xianxia]\n',
  imageSrc2: '/woyufengtian-300w.jpg',
  linkText5: 'https://example.com',
  linkText12: 'https://example.com',
  linkText6: 'https://example.com',
  linkText15: 'https://example.com',
  text11: '[Xianxia]\n',
  imageAlt1: 'image',
  linkText1: 'https://example.com',
  linkText4: 'https://example.com',
  linkText9: 'https://example.com',
  imageSrc: '/fanren-300w.jpg',
  text10: '[Xianxia]\n',
  linkText10: 'https://example.com',
  linkText11: 'https://example.com',
  imageAlt: 'image',
  text13: '[Xianxia]\n',
  linkText: 'https://example.com',
  text6: '[Xianxia]\n',
  linkText13: 'https://example.com',
  text14: '[Xianxia]\n',
  text12: '[Xianxia]\n',
  linkText7: 'https://example.com',
  text2: '[Xianxia]\n',
  text5: '[Xianxia]\n',
  linkText8: 'https://example.com',
}

Homecomponent2.propTypes = {
  text4: PropTypes.string,
  linkText14: PropTypes.string,
  text7: PropTypes.string,
  linkText16: PropTypes.string,
  text1: PropTypes.string,
  text8: PropTypes.string,
  linkText3: PropTypes.string,
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt2: PropTypes.string,
  text3: PropTypes.string,
  linkText2: PropTypes.string,
  text15: PropTypes.string,
  text9: PropTypes.string,
  imageSrc2: PropTypes.string,
  linkText5: PropTypes.string,
  linkText12: PropTypes.string,
  linkText6: PropTypes.string,
  linkText15: PropTypes.string,
  text11: PropTypes.string,
  imageAlt1: PropTypes.string,
  linkText1: PropTypes.string,
  linkText4: PropTypes.string,
  linkText9: PropTypes.string,
  imageSrc: PropTypes.string,
  text10: PropTypes.string,
  linkText10: PropTypes.string,
  linkText11: PropTypes.string,
  imageAlt: PropTypes.string,
  text13: PropTypes.string,
  linkText: PropTypes.string,
  text6: PropTypes.string,
  linkText13: PropTypes.string,
  text14: PropTypes.string,
  text12: PropTypes.string,
  linkText7: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  linkText8: PropTypes.string,
}

export default Homecomponent2
