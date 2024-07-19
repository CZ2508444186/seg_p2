import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './c-nnovelco.css'

const CNnovelco = (props) => {
  return (
    <div className="c-nnovelco-container">
      <div className="c-nnovelco-container01">
        <div className="c-nnovelco-container02">
          <div className="c-nnovelco-container03">
            <Link to="/" className="c-nnovelco-navlink button">
              <span className="c-nnovelco-text">{props.text6}</span>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="c-nnovelco-image"
              />
            </Link>
            <div className="c-nnovelco-container04">
              <button type="button" className="c-nnovelco-button button">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="c-nnovelco-image1"
                />
              </button>
              <div className="c-nnovelco-container05">
                <div className="c-nnovelco-container06">
                  <Link
                    to="/readnovelpage"
                    className="c-nnovelco-navlink01 button"
                  >
                    <img
                      alt={props.imageAlt2}
                      src={props.imageSrc2}
                      className="c-nnovelco-image2"
                    />
                    <span className="c-nnovelco-text01">
                      <span>阅读</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
                <div className="c-nnovelco-container07">
                  <Link to="/bookshelf" className="c-nnovelco-navlink02 button">
                    <img
                      alt={props.imageAlt3}
                      src={props.imageSrc3}
                      className="c-nnovelco-image3"
                    />
                    <span className="c-nnovelco-text04">{props.text16}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="c-nnovelco-container08">
            <span className="c-nnovelco-text05">{props.text4}</span>
            <span className="c-nnovelco-text06">
              <span>落魄谷中寒风吹，春秋蝉鸣少年归。</span>
              <br></br>
              <span>荡魂山处石人泪，定仙游走魔向北。</span>
              <br></br>
              <span>逆流河上万仙退，爱情不敌坚持泪。</span>
              <br></br>
              <span>宿命天成命中败，仙尊悔而我不悔！</span>
              <br></br>
              <span>
                独帜入渊深未知，身似浮萍命难持。
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                千舟皆朝归海处，一苇青拨戏浪巅。
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                惊鸿四散鱼逃尽，唯有残帆傲此间。
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>待到天开云雾散，负手直望笑苍天</span>
            </span>
          </div>
          <div id="reviews" className="c-nnovelco-container09">
            <h1>
              <span>Reviews</span>
              <br></br>
            </h1>
          </div>
        </div>
      </div>
      <div className="c-nnovelco-container10">
        <div className="c-nnovelco-container11">
          <span className="c-nnovelco-text25">{props.text}</span>
          <span className="c-nnovelco-text26">{props.text1}</span>
          <span className="c-nnovelco-text27">{props.text2}</span>
          <span className="c-nnovelco-text28">{props.text3}</span>
        </div>
        <div className="c-nnovelco-container12">
          <div className="c-nnovelco-container13">
            <ul className="c-nnovelco-ul list">
              <li className="c-nnovelco-li list-item">
                <span className="c-nnovelco-text29">{props.text7}</span>
              </li>
              <li className="c-nnovelco-li01 list-item">
                <Link to="/readnovelpage" className="c-nnovelco-navlink03">
                  {props.text8}
                </Link>
              </li>
              <li className="c-nnovelco-li02 list-item">
                <Link to="/readnovelpage" className="c-nnovelco-navlink04">
                  {props.text9}
                </Link>
              </li>
              <li className="c-nnovelco-li03 list-item">
                <Link to="/readnovelpage" className="c-nnovelco-navlink05">
                  {props.text10}
                </Link>
              </li>
              <li className="c-nnovelco-li04 list-item">
                <Link to="/readnovelpage" className="c-nnovelco-navlink06">
                  {props.text11}
                </Link>
              </li>
            </ul>
          </div>
          <div className="c-nnovelco-container14">
            <ul className="c-nnovelco-ul1 list">
              <li className="c-nnovelco-li05 list-item"></li>
              <li className="c-nnovelco-li06 list-item">
                <Link to="/readnovelpage" className="c-nnovelco-navlink07">
                  {props.text12}
                </Link>
              </li>
              <li className="c-nnovelco-li07 list-item">
                <Link to="/readnovelpage" className="c-nnovelco-navlink08">
                  {props.text13}
                </Link>
              </li>
              <li className="c-nnovelco-li08 list-item">
                <Link to="/readnovelpage" className="c-nnovelco-navlink09">
                  {props.text14}
                </Link>
              </li>
              <li className="c-nnovelco-li09 list-item">
                <Link to="/readnovelpage" className="c-nnovelco-navlink10">
                  {props.text15}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="reviewinput" className="c-nnovelco-container15">
          <textarea
            id="contact-form-3-message"
            rows="3"
            placeholder={props.textareaPlaceholder}
            className="c-nnovelco-textarea thq-input"
          ></textarea>
          <button type="button" className="c-nnovelco-button1 button">
            <span className="c-nnovelco-text30">{props.text5}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

CNnovelco.defaultProps = {
  text2: '作品标签:',
  textareaPlaceholder: 'Enter your message',
  text15: '第八节',
  text11: '第四节',
  imageAlt1: 'image',
  imageSrc3: '/add-200h.png',
  text14: '第七节',
  imageAlt3: 'image',
  imageSrc1: '/guzhenren-300w.jpg',
  text4: '小说简介：',
  text12: '第五节',
  imageSrc: '/home-200h.png',
  text16: '    加入书架',
  text8: '第一节',
  text7: '章节',
  text13: '第六节',
  text10: '第三节',
  imageSrc2: '/book-200h.png',
  text1: '网络文学',
  text9: '第二节',
  text6: '主页',
  text: '类别:',
  imageAlt: 'image',
  imageAlt2: 'image',
  text5: 'Submit',
  text3: '冒险 奇幻 玄幻 仙侠 修真',
}

CNnovelco.propTypes = {
  text2: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  text15: PropTypes.string,
  text11: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc3: PropTypes.string,
  text14: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc1: PropTypes.string,
  text4: PropTypes.string,
  text12: PropTypes.string,
  imageSrc: PropTypes.string,
  text16: PropTypes.string,
  text8: PropTypes.string,
  text7: PropTypes.string,
  text13: PropTypes.string,
  text10: PropTypes.string,
  imageSrc2: PropTypes.string,
  text1: PropTypes.string,
  text9: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt2: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
}

export default CNnovelco
