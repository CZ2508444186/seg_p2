import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './novel4pageco.css'

const Novel4pageco = (props) => {
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
    <div className="novel4pageco-container">
      <div className="novel4pageco-container01">
        <div className="novel4pageco-container02">
          <div className="novel4pageco-container03">
            <div className="novel4pageco-container04">
              <Link to="/" className="novel4pageco-navlink button">
                <span className="novel4pageco-text">
                  <span>H</span>
                  <span>ome</span>
                </span>
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="novel4pageco-image"
                />
              </Link>
              <div className="novel4pageco-container05">
                <button type="button" className="novel4pageco-button button">
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="novel4pageco-image1"
                  />
                </button>
                <div className="novel4pageco-container06">
                  <div className="novel4pageco-container07">
                    <Link
                      to="/readnovelpage"
                      className="novel4pageco-navlink01 button"
                    >
                      <img
                        alt={props.imageAlt2}
                        src={props.imageSrc2}
                        className="novel4pageco-image2"
                      />
                      <span className="novel4pageco-text03">
                        <span>Read</span>
                        <br></br>
                      </span>
                    </Link>
                  </div>
                  <div className="novel4pageco-container08">
                    <Link
                      to="/bookshelf"
                      className="novel4pageco-navlink02 button"
                    >
                      <img
                        alt={props.imageAlt3}
                        src={props.imageSrc3}
                        className="novel4pageco-image3"
                      />
                      <span className="novel4pageco-text06">
                        {props.text15}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="novel4pageco-container09">
              <span className="novel4pageco-text07">{props.text4}</span>
              <div id="starshow" className="starshows">{displayStars()} (4.5/5)</div>
              <span className="novel4pageco-text08">
                <span>Author:</span>
                <br></br>
                <span>Wang Yu 忘语</span>
                <br></br>
                <span>Translator:</span>
                <br></br>
                <span>Johnchen &amp; DoubleDD</span>
                <br></br>
                <span>
                  A poor and ordinary boy from a village joins a minor sect in
                  Jiang Hu and becomes an Unofficial Disciple by chance.
                  <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                  />
                </span>
                <br></br>
                <span>
                  How will Han Li, a commoner by birth, establish a foothold for
                  himself in in his sect?
                  <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                  />
                </span>
                <br></br>
                <span>
                  With his mediocre aptitude, he must successfully traverse the
                  treacherous path of cultivation and avoid the notice of those
                  who may do him harm.
                  <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                  />
                </span>
                <br></br>
                <span>
                  This is a story of an ordinary mortal who, against all odds,
                  clashes with devilish demons and ancient celestials in order
                  to find his own path towards immortality.
                </span>
                <br></br>
              </span>
            </div>
            <div id="reviews" className="novel4pageco-container10">
              {reviews.map((review, index) => (
                  <div key={index}>
                    <p><strong>Anonymous:</strong>{review.text}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div className="novel4pageco-container11">
          <div className="novel4pageco-container12">
            <span className="novel4pageco-text28">{props.text}</span>
            <span className="novel4pageco-text29">{props.text1}</span>
            <span className="novel4pageco-text30">{props.text2}</span>
            <span className="novel4pageco-text31">{props.text3}</span>
          </div>
          <div className="novel4pageco-container13">
            <div className="novel4pageco-container14">
              <ul className="novel4pageco-ul list">
                <li className="novel4pageco-li list-item">
                  <span className="novel4pageco-text32">{props.text6}</span>
                </li>
                <li className="novel4pageco-li01 list-item">
                  <Link to="/readnovelpage" className="novel4pageco-navlink03">
                    {props.text7}
                  </Link>
                </li>
                <li className="novel4pageco-li02 list-item">
                  <Link to="/readnovelpage" className="novel4pageco-navlink04">
                    {props.text8}
                  </Link>
                </li>
                <li className="novel4pageco-li03 list-item">
                  <Link to="/readnovelpage" className="novel4pageco-navlink05">
                    {props.text9}
                  </Link>
                </li>
                <li className="novel4pageco-li04 list-item">
                  <Link to="/readnovelpage" className="novel4pageco-navlink06">
                    {props.text10}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="novel4pageco-container15">
              <ul className="novel4pageco-ul1 list">
                <li className="novel4pageco-li05 list-item"></li>
                <li className="novel4pageco-li06 list-item">
                  <Link to="/readnovelpage" className="novel4pageco-navlink07">
                    {props.text11}
                  </Link>
                </li>
                <li className="novel4pageco-li07 list-item">
                  <Link to="/readnovelpage" className="novel4pageco-navlink08">
                    {props.text12}
                  </Link>
                </li>
                <li className="novel4pageco-li08 list-item">
                  <Link to="/readnovelpage" className="novel4pageco-navlink09">
                    {props.text13}
                  </Link>
                </li>
                <li className="novel4pageco-li09 list-item">
                  <Link to="/readnovelpage" className="novel4pageco-navlink10">
                    {props.text14}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div id="reviewinput" className="novel4pageco-container16">
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

Novel4pageco.defaultProps = {
  text: 'Type:',
  text1: 'Web Novel(CN)',
  text2: 'Genre:',
  text3: 'Action Adventure Fantasy Mature Mystery  Xianxia',
  textareaPlaceholder: 'Enter your message',
  text4: 'Description',
  text5: 'Submit',
  imageSrc: '/home-200h.png',
  imageAlt: 'image',
  imageSrc1: '/fanren-400h.jpg',
  imageAlt1: 'image',
  text6: 'Chapter List',
  text7: 'Chapter 1',
  text8: 'Chapter 2',
  text9: 'Chapter 3',
  text10: 'Chapter 4',
  text11: 'Chapter 5',
  text12: 'Chapter 6',
  text13: 'Chapter 7',
  text14: 'Chapter 8',
  imageSrc2: '/book-200h.png',
  imageAlt2: 'image',
  imageSrc3: '/add-200h.png',
  imageAlt3: 'image',
  text15: 'add to library',
}

Novel4pageco.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  text15: PropTypes.string,
}

export default Novel4pageco
