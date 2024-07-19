import React from 'react'

import PropTypes from 'prop-types'

import './sign-inco.css'

const SignInco = (props) => {
  return (
    <div className="sign-inco-container thq-section-padding">
      <div className="sign-inco-max-width thq-section-max-width thq-section-padding">
        <div className="sign-inco-form-root">
          <div className="sign-inco-form">
            <h2 className="sign-inco-text thq-heading-2">{props.heading1}</h2>
            <form className="sign-inco-form1">
              <div className="sign-inco-email">
                <label
                  htmlFor="thq-sign-in-1-password"
                  className="thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-3-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-inco-textinput thq-body-large thq-input"
                />
              </div>
              <div className="sign-inco-password">
                <div className="sign-inco-container1">
                  <label
                    htmlFor="thq-sign-in-3-password"
                    className="thq-body-large"
                  >
                    Password
                  </label>
                  <div className="sign-inco-hide-password">
                    <svg viewBox="0 0 1024 1024" className="sign-inco-icon">
                      <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                    </svg>
                    <span className="thq-body-small">Hide</span>
                  </div>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-3-password"
                  required="true"
                  placeholder="Password"
                  className="sign-inco-textinput1 thq-body-large thq-input"
                />
                <span className="sign-inco-text4 thq-body-small">
                  Forgot password
                </span>
              </div>
            </form>
            <div className="sign-inco-container2">
              <button
                type="submit"
                className="sign-inco-button thq-button-filled"
              >
                <span className="sign-inco-text5 thq-body-small">
                  {props.action1}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="sign-inco-container3">
          <div className="sign-inco-divider">
            <div className="sign-inco-divider1"></div>
            <p className="thq-body-large">{props.content1}</p>
            <div className="sign-inco-divider2"></div>
          </div>
          <button
            type="button"
            className="sign-inco-button1 thq-button-outline"
          >
            <span className="sign-inco-text7 thq-body-small">
              {props.action2}
            </span>
          </button>
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="sign-inco-sign-up-image thq-img-ratio-16-9"
      />
      <div className="sign-inco-container4"></div>
    </div>
  )
}

SignInco.defaultProps = {
  heading1: 'Sign in',
  button2: 'Button',
  action2: 'Create an account',
  action1: 'Sign in',
  text: 'Text',
  image1Alt: 'SignUp Image',
  image1Src: '/clouds-7989077_1920-1500w.jpg',
  button: 'Button',
  content1: 'New to our community',
  button1: 'Button',
}

SignInco.propTypes = {
  heading1: PropTypes.string,
  button2: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  text: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  button: PropTypes.string,
  content1: PropTypes.string,
  button1: PropTypes.string,
}

export default SignInco
