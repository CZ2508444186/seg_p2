import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './novel2pageco.css'

const Novel2pageco = (props) => {
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
    <div className="novel2pageco-container">
      <div className="novel2pageco-container01">
        <div className="novel2pageco-container02">
          <div className="novel2pageco-container03">
            <Link to="/" className="novel2pageco-navlink button">
              <span className="novel2pageco-text">
                <span>H</span>
                <span>ome</span>
              </span>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="novel2pageco-image"
              />
            </Link>
            <div className="novel2pageco-container04">
              <button type="button" className="novel2pageco-button button">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="novel2pageco-image1"
                />
              </button>
              <div className="novel2pageco-container05">
                <div className="novel2pageco-container06">
                  <Link
                    to="/readnovelpage"
                    className="novel2pageco-navlink01 button"
                  >
                    <img
                      alt={props.imageAlt2}
                      src={props.imageSrc2}
                      className="novel2pageco-image2"
                    />
                    <span className="novel2pageco-text03">
                      <span>Read</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
                <div className="novel2pageco-container07">
                  <Link
                    to="/bookshelf"
                    className="novel2pageco-navlink02 button"
                  >
                    <img
                      alt={props.imageAlt3}
                      src={props.imageSrc3}
                      className="novel2pageco-image3"
                    />
                    <span className="novel2pageco-text06">{props.text15}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="novel2pageco-container08">
            <span className="novel2pageco-text07">{props.text4}</span>
            <div id="starshow" className="starshows">{displayStars()} (4.5/5)</div>
            <span className="novel2pageco-text08">
              <span>Author:</span>
              <br></br>
              <span>Er Gen [耳根]</span>
              <br></br>
              <span>Translator:</span>
              <br></br>
              <span>Deathblade</span>
              <br></br>
              <span>
                I Shall Seal the Heavens is the story of the young scholar Meng
                Hao, who gets forcibly recruited into a sect of immortal
                cultivators.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                In the cultivation world, the strong prey on the weak, and the
                law of the jungle prevails.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                Meng Hao must adapt to survive.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                Filled with both comedy and drama, I Shall Seal the Heavens
                remains one of the most beloved xianxia stories ever translated.
                <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                />
              </span>
              <br></br>
              <span>
                What does it mean to “Seal the Heavens?” This is a secret that
                you will have to uncover along with Meng Hao!
              </span>
              <br></br>
            </span>
          </div>
          <div id="reviews" className="novel2pageco-container09">
            {reviews.map((review, index) => (
                <div key={index}>
                  <p><strong>Anonymous:</strong>{review.text}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="novel2pageco-container10">
        <div className="novel2pageco-container11">
          <span className="novel2pageco-text30">{props.text}</span>
          <span className="novel2pageco-text31">{props.text1}</span>
          <span className="novel2pageco-text32">{props.text2}</span>
          <span className="novel2pageco-text33">{props.text3}</span>
        </div>
        <div className="novel2pageco-container12">
          <div className="novel2pageco-container13">
            <ul className="novel2pageco-ul list">
              <li className="novel2pageco-li list-item">
                <span className="novel2pageco-text34">{props.text6}</span>
              </li>
              <li className="novel2pageco-li01 list-item">
                <Link to="/readnovelpage" className="novel2pageco-navlink03">
                  {props.text7}
                </Link>
              </li>
              <li className="novel2pageco-li02 list-item">
                <Link to="/readnovelpage" className="novel2pageco-navlink04">
                  {props.text8}
                </Link>
              </li>
              <li className="novel2pageco-li03 list-item">
                <Link to="/readnovelpage" className="novel2pageco-navlink05">
                  {props.text9}
                </Link>
              </li>
              <li className="novel2pageco-li04 list-item">
                <Link to="/readnovelpage" className="novel2pageco-navlink06">
                  {props.text10}
                </Link>
              </li>
            </ul>
          </div>
          <div className="novel2pageco-container14">
            <ul className="novel2pageco-ul1 list">
              <li className="novel2pageco-li05 list-item"></li>
              <li className="novel2pageco-li06 list-item">
                <Link to="/readnovelpage" className="novel2pageco-navlink07">
                  {props.text11}
                </Link>
              </li>
              <li className="novel2pageco-li07 list-item">
                <Link to="/readnovelpage" className="novel2pageco-navlink08">
                  {props.text12}
                </Link>
              </li>
              <li className="novel2pageco-li08 list-item">
                <Link to="/readnovelpage" className="novel2pageco-navlink09">
                  {props.text13}
                </Link>
              </li>
              <li className="novel2pageco-li09 list-item">
                <Link to="/readnovelpage" className="novel2pageco-navlink10">
                  {props.text14}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="reviewinput" className="novel2pageco-container15">
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

Novel2pageco.defaultProps = {
  imageSrc: './seg_p2/home-200h.png',
  text15: 'add to library',
  imageSrc3: './seg_p2/add-200h.png',
  imageSrc1: './seg_p2/woyufengtian-400h.jpg',
  imageSrc2: './seg_p2/book-200h.png',
  text8: 'Chapter 2',
  text11: 'Chapter 5',
  text13: 'Chapter 7',
  imageAlt: 'image',
  imageAlt3: 'image',
  text4: 'Description',
  text6: 'Chapter List',
  text7: 'Chapter 1',
  imageAlt2: 'image',
  text2: 'Genre:',
  text14: 'Chapter 8',
  imageAlt1: 'image',
  text1: 'Web Novel(CN)',
  text12: 'Chapter 6',
  text: 'Type:',
  text3: 'Comedy Action Adventure Fantasy Mature Mystery  Xianxia',
  text10: 'Chapter 4',
  text5: 'Submit',
  textareaPlaceholder: 'Enter your message',
  text9: 'Chapter 3',
}

Novel2pageco.propTypes = {
  imageSrc: PropTypes.string,
  text15: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc2: PropTypes.string,
  text8: PropTypes.string,
  text11: PropTypes.string,
  text13: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt3: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  imageAlt2: PropTypes.string,
  text2: PropTypes.string,
  text14: PropTypes.string,
  imageAlt1: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text10: PropTypes.string,
  text5: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  text9: PropTypes.string,
}

export default Novel2pageco
