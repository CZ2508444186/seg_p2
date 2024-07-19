import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './novelpageco.css'

const Novelpageco = (props) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = () => {
    if (newReview !== '') {
      setReviews([...reviews, { text: newReview }]);
      setNewReview(''); // Reset input field
    }
  };

  const displayStars = () => {
    return (
        <>
          {"⭐⭐⭐⭐"}
          <span style={{ position: 'relative' }}>
        </span>
        </>
    );
  };
  return (
    <div className="novelpageco-container">
      <div className="novelpageco-container01">
        <div className="novelpageco-container02">
          <div className="novelpageco-container03">
            <div className="novelpageco-container04">
              <Link to="/" className="Homebutton button">
                <span className="Home_button">
                  <span>H</span>
                  <span>ome</span>
                </span>
                <img
                    alt="Home icon"
                    src={props.imageSrc21}
                    className="home_button"
                />
              </Link>
              <div className="NovelCover">
                <button type="button" className="novelcoverbutton button">
                  <img
                      alt="Novel Cover"
                      src={props.imageSrc1}
                      className="novelpageco-image1"
                  />
                </button>
                <div className="novelpageco-container06">
                  <div className="novelpageco-container07">
                    <Link
                        to="/readnovelpage"
                        className="novelpageco-navlink01 button"
                    >
                      <img
                          alt="Book icon"
                          src={props.imageSrc2}
                          className="novelpageco-image2"
                      />
                      <span className="novelpageco-text03">
                        <span>Read</span>
                        <br></br>
                      </span>
                    </Link>
                  </div>
                  <div className="novelpageco-container08">
                    <Link
                        to="/bookshelf"
                        className="novelpageco-navlink02 button"
                    >
                      <img
                          alt="add icon"
                          src={props.imageSrc3}
                          className="novelpageco-image3"
                      />
                      <span className="novelpageco-text06">{props.text6}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="novelpageco-container09">
              <span className="novelpageco-text07">{props.text}</span>
              <div id="starshow" className="starshows">{displayStars()} (4.5/5)</div>
              <span className="novelpageco-text08">
                <span>
                  Humans are the spirit of all living beings, Gu* are the
                  essence of heaven and earth.
                </span>
                <br></br>
                <span>
                  With his three views* unrighteous, a demon is reborn.
                </span>
                <br></br>
                <span>
                  Former days are but an old dream, an identical name is made
                  anew.
                </span>
                <br></br>
                <span>
                  The story of a time traveler who keeps on being reborn.
                </span>
                <br></br>
                <span>
                  A unique world that nurtures, refines, and uses Gu.Spring
                  Autumn Cicada, Moonlight Gu, Liquor Worm, Great Qi Golden
                  Light Worm, Slender Black Hair Gu, Hope Gu…
                </span>
                <br></br>
                <span>
                  And a great demon of the world that acts as his heart pleases!
                </span>
                <br></br>
                <span>
                  A story of a villain, Fang Yuan who was reborn 500 years into
                  the past with the Spring Autumn Cicada he painstakingly
                  refined.
                  <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                  />
                </span>
                <br></br>
                <span>
                  With his profound wisdom, battle and life experiences, he
                  seeks to overcome his foes with skill and wit! Ruthless and
                  amoral, he has no need to hold back as he pursues his ultimate
                  goals.
                  <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                  />
                </span>
                <br></br>
                <span>
                  In a world of cruelty where one cultivates using Gu – magical
                  creatures of the world – Fang Yuan must rise up above all with
                  his own power.
                </span>
              </span>
            </div>

            <div id="reviews" className="novelpageco-container10">
              {reviews.map((review, index) => (
                  <div key={index}>
                    <p><strong>Anonymous:</strong>{review.text}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div className="novelpageco-container11">
        <div className="novelpageco-container12">
            <span className="novelpageco-text29">{props.text1}</span>
            <span className="novelpageco-text30">{props.text2}</span>
            <span className="novelpageco-text31">{props.text3}</span>
            <span className="novelpageco-text32">{props.text4}</span>
          </div>
          <div className="novelpageco-container13">
            <div className="novelpageco-container14">
              <ul className="novelpageco-ul list">
                <li className="novelpageco-li list-item">
                  <span className="novelpageco-text33">{props.text7}</span>
                </li>
                <li className="novelpageco-li01 list-item">
                  <Link to="/readnovelpage" className="novelpageco-navlink03">
                    {props.text8}
                  </Link>
                </li>
                <li className="novelpageco-li02 list-item">
                  <Link to="/readnovelpage" className="novelpageco-navlink04">
                    {props.text9}
                  </Link>
                </li>
                <li className="novelpageco-li03 list-item">
                  <Link to="/readnovelpage" className="novelpageco-navlink05">
                    {props.text10}
                  </Link>
                </li>
                <li className="novelpageco-li04 list-item">
                  <Link to="/readnovelpage" className="novelpageco-navlink06">
                    {props.text11}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="novelpageco-container15">
              <ul className="novelpageco-ul1 list">
                <li className="novelpageco-li05 list-item"></li>
                <li className="novelpageco-li06 list-item">
                  <Link to="/readnovelpage" className="novelpageco-navlink07">
                    {props.text12}
                  </Link>
                </li>
                <li className="novelpageco-li07 list-item">
                  <Link to="/readnovelpage" className="novelpageco-navlink08">
                    {props.text13}
                  </Link>
                </li>
                <li className="novelpageco-li08 list-item">
                  <Link to="/readnovelpage" className="novelpageco-navlink09">
                    {props.text14}
                  </Link>
                </li>
                <li className="novelpageco-li09 list-item">
                  <Link to="/readnovelpage" className="novelpageco-navlink10">
                    {props.text15}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div id="reviewinput" className="novelpageco-container16">
            <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write a review..."
            className="novelpageco-textarea thq-input"
            />
            <button onClick={handleReviewSubmit} className="novelpageco-button1">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Novelpageco.defaultProps = {
  imageSrc21: './seg_p2/home-200h.png',
  text14: 'Chapter 7',
  text15: 'Chapter 8',
  imageSrc: 'ad895943-c3a2-4e9d-a4af-69c450e546cc',
  imageAlt21: 'image',
  text12: 'Chapter 5',
  imageSrc3: './seg_p2/add-200h.png',
  text3: 'Genre:',
  text8: 'Chapter 1',
  imageAlt2: 'image',
  text6: 'add to library',
  text10: 'Chapter 3',
  text: 'Description',
  imageAlt3: 'image',
  imageSrc2: './seg_p2/book-200h.png',
  text11: 'Chapter 4',
  text9: 'Chapter 2',
  text13: 'Chapter 6',
  imageAlt: 'image',
  textareaPlaceholder: 'Enter your message',
  text2: 'Web Novel(CN)',
  text4: 'Action Adventure Fantasy Mature Mystery Psychological Xianxia',
  text7: 'Chapter List',
  text5: 'Submit',
  imageAlt1: 'image',
  imageSrc1: './seg_p2/guzhenren-300w.jpg',
  text1: 'Type:',
}

Novelpageco.propTypes = {
  linkText3: PropTypes.string,
  imageSrc21: PropTypes.string,
  text14: PropTypes.string,
  linkText: PropTypes.string,
  text15: PropTypes.string,
  linkText2: PropTypes.string,
  imageSrc: PropTypes.string,
  linkText6: PropTypes.string,
  imageAlt21: PropTypes.string,
  text12: PropTypes.string,
  linkText4: PropTypes.string,
  linkText7: PropTypes.string,
  imageSrc3: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  imageAlt2: PropTypes.string,
  text6: PropTypes.string,
  text10: PropTypes.string,
  text: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc2: PropTypes.string,
  text11: PropTypes.string,
  linkText5: PropTypes.string,
  text9: PropTypes.string,
  text13: PropTypes.string,
  imageAlt: PropTypes.string,
  linkText1: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text1: PropTypes.string,
}

export default Novelpageco
