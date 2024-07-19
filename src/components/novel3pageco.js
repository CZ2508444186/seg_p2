import React, { useState }from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './novel3pageco.css'

const Novel3pageco = (props) => {
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
    <div className="novel3pageco-container">
      <div className="novel3pageco-container01">
        <div className="novel3pageco-container02">
          <div className="novel3pageco-container03">
            <Link to="/" className="novel3pageco-navlink button">
              <span className="novel3pageco-text">
                <span>H</span>
                <span>ome</span>
              </span>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="novel3pageco-image"
              />
            </Link>
            <div className="novel3pageco-container04">
              <button type="button" className="novel3pageco-button button">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="novel3pageco-image1"
                />
              </button>
              <div className="novel3pageco-container05">
                <div className="novel3pageco-container06">
                  <Link
                    to="/readnovelpage"
                    className="novel3pageco-navlink01 button"
                  >
                    <img
                      alt={props.imageAlt2}
                      src={props.imageSrc2}
                      className="novel3pageco-image2"
                    />
                    <span className="novel3pageco-text03">
                      <span>Read</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
                <div className="novel3pageco-container07">
                  <Link
                    to="/bookshelf"
                    className="novel3pageco-navlink02 button"
                  >
                    <img
                      alt={props.imageAlt3}
                      src={props.imageSrc3}
                      className="novel3pageco-image3"
                    />
                    <span className="novel3pageco-text06">{props.text15}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="novel3pageco-container08">
            <span className="novel3pageco-text07">{props.text4}</span>
            <div id="starshow" className="starshows">{displayStars()} (4.5/5)</div>
            <span className="novel3pageco-text08">
              <span>Author:</span>
              <br></br>
              <span>Er Gen</span>
              <br></br>
              <span>Translator:</span>
              <br></br>
              <span>Deathblade</span>
              <br></br>
              <span>
                Xu Qing lives in a world where the weak are the prey of the
                strong, and every day is a fight to survive.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                The aura of a god has polluted the entire world, including the
                resources necessary to practice cultivation.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                As a result, cultivators risk mutation and death when they try
                to become more powerful. Xu Qing’s goals are simple: he wants to
                survive, and he wants to find his lost family.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                He lives in brutal, ruthless, and chaotic circumstances, but he
                encounters good people that become his close friends.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                He is not crafty and cowardly like Bai Xiaochun.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                He is not clever and greedy like Meng Hao. He is his own person,
                and if you want to find out what he’s like… you’ll have to start
                reading!
              </span>
              <br></br>
            </span>
          </div>
          <div id="reviews" className="novel3pageco-container09">
            {reviews.map((review, index) => (
                <div key={index}>
                  <p><strong>Anonymous:</strong>{review.text}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="novel3pageco-container10">
        <div className="novel3pageco-container11">
          <span className="novel3pageco-text32">{props.text}</span>
          <span className="novel3pageco-text33">{props.text1}</span>
          <span className="novel3pageco-text34">{props.text2}</span>
          <span className="novel3pageco-text35">{props.text3}</span>
        </div>
        <div className="novel3pageco-container12">
          <div className="novel3pageco-container13">
            <ul className="novel3pageco-ul list">
              <li className="novel3pageco-li list-item">
                <span className="novel3pageco-text36">{props.text6}</span>
              </li>
              <li className="novel3pageco-li01 list-item">
                <Link to="/readnovelpage" className="novel3pageco-navlink03">
                  {props.text7}
                </Link>
              </li>
              <li className="novel3pageco-li02 list-item">
                <Link to="/readnovelpage" className="novel3pageco-navlink04">
                  {props.text8}
                </Link>
              </li>
              <li className="novel3pageco-li03 list-item">
                <Link to="/readnovelpage" className="novel3pageco-navlink05">
                  {props.text9}
                </Link>
              </li>
              <li className="novel3pageco-li04 list-item">
                <Link to="/readnovelpage" className="novel3pageco-navlink06">
                  {props.text10}
                </Link>
              </li>
            </ul>
          </div>
          <div className="novel3pageco-container14">
            <ul className="novel3pageco-ul1 list">
              <li className="novel3pageco-li05 list-item"></li>
              <li className="novel3pageco-li06 list-item">
                <Link to="/readnovelpage" className="novel3pageco-navlink07">
                  {props.text11}
                </Link>
              </li>
              <li className="novel3pageco-li07 list-item">
                <Link to="/readnovelpage" className="novel3pageco-navlink08">
                  {props.text12}
                </Link>
              </li>
              <li className="novel3pageco-li08 list-item">
                <Link to="/readnovelpage" className="novel3pageco-navlink09">
                  {props.text13}
                </Link>
              </li>
              <li className="novel3pageco-li09 list-item">
                <Link to="/readnovelpage" className="novel3pageco-navlink10">
                  {props.text14}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="reviewinput" className="novel3pageco-container15">
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
  )
}

Novel3pageco.defaultProps = {
  text7: 'Chapter 1',
  imageAlt3: 'image',
  imageSrc2: './seg_p2/book-200h.png',
  text8: 'Chapter 2',
  text: 'Type:',
  text13: 'Chapter 7',
  text10: 'Chapter 4',
  text9: 'Chapter 3',
  text4: 'Description',
  imageAlt1: 'image',
  text1: 'Web Novel(CN)',
  text15: 'add to library',
  text3: 'Action Adventure Fantasy Mature Mystery  Xianxia',
  imageSrc1: './seg_p2/guangy-400h.jpg',
  textareaPlaceholder: 'Enter your message',
  text5: 'Submit',
  text14: 'Chapter 8',
  text6: 'Chapter List',
  text12: 'Chapter 6',
  imageAlt2: 'image',
  imageAlt: 'image',
  imageSrc: './seg_p2/home-200h.png',
  text11: 'Chapter 5',
  text2: 'Genre:',
  imageSrc3: './seg_p2/add-200h.png',
}

Novel3pageco.propTypes = {
  text7: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc2: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
  text13: PropTypes.string,
  text10: PropTypes.string,
  text9: PropTypes.string,
  text4: PropTypes.string,
  imageAlt1: PropTypes.string,
  text1: PropTypes.string,
  text15: PropTypes.string,
  text3: PropTypes.string,
  imageSrc1: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  text5: PropTypes.string,
  text14: PropTypes.string,
  text6: PropTypes.string,
  text12: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text11: PropTypes.string,
  text2: PropTypes.string,
  imageSrc3: PropTypes.string,
}

export default Novel3pageco
