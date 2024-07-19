import React from 'react'

import PropTypes from 'prop-types'

import './fa-qco.css'

const FAQco = (props) => {
  return (
    <div className="fa-qco-faq9 thq-section-padding">
      <div className="fa-qco-max-width thq-section-max-width">
        <div className="fa-qco-section-title thq-flex-column">
          <h2 className="fa-qco-text thq-heading-2">{props.heading1}</h2>
        </div>
        <div className="thq-flex-column">
          <div className="fa-qco-row">
            <div className="thq-divider-horizontal"></div>
            <div className="fa-qco-content1">
              <p className="fa-qco-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <span className="fa-qco-text1">Answers here</span>
            </div>
          </div>
          <div className="fa-qco-row1">
            <div className="thq-divider-horizontal"></div>
            <div className="fa-qco-content2">
              <p className="fa-qco-faq1-question1 thq-body-large">
                {props.faq1Question}
              </p>
              <span className="fa-qco-text2">Answers here</span>
            </div>
          </div>
          <div className="fa-qco-row2">
            <div className="thq-divider-horizontal"></div>
            <div className="fa-qco-content3">
              <p className="fa-qco-faq1-question2 thq-body-large">
                {props.faq1Question}
              </p>
              <span className="fa-qco-text3">Answers here</span>
            </div>
          </div>
          <div className="fa-qco-row3">
            <div className="thq-divider-horizontal"></div>
            <div className="fa-qco-content4">
              <p className="fa-qco-faq4-question thq-body-large">
                {props.faq4Question}
              </p>
              <span className="fa-qco-faq4-answer thq-body-small">
                <span>Answers here</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="fa-qco-content6">
            <h2 className="thq-heading-2 fa-qco-text6">{props.heading2}</h2>
          </div>
          <button className="fa-qco-button thq-button-outline">
            <span className="thq-body-small">{props.action}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

FAQco.defaultProps = {
  faq4Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  faq3Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  text: 'Text',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq1Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  faq4Question: 'Frequently Asked Questions',
  faq2Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  faq2Question: 'Frequently Asked Questions',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ',
  faq1Question: 'Frequently Asked Questions',
  action: 'Contact',
  faq3Question: 'Frequently Asked Questions',
  heading2: 'Still have a question?',
  heading1: 'FAQs',
}

FAQco.propTypes = {
  faq4Answer: PropTypes.string,
  faq3Answer: PropTypes.string,
  text: PropTypes.string,
  content2: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq2Question: PropTypes.string,
  content1: PropTypes.string,
  faq1Question: PropTypes.string,
  action: PropTypes.string,
  faq3Question: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
}

export default FAQco
