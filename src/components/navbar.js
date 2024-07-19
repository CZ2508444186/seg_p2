import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className={`navbar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu"></div>
        <div className="navbar-container1">
          <div data-thq="thq-burger-menu" className="navbar-burger-menu"></div>
          <Link to="/" className="navbar-link">
            DESTINATION LITERATURE
          </Link>
        </div>
        <Link to="/browsepage" className="navbar-navlink button">
          <img
            alt={props.imageAlt4}
            src={props.imageSrc4}
            className="navbar-image"
          />
          <span className="navbar-text">Browse</span>
        </Link>
        <Link to="/write" className="navbar-navlink1 button">
          <img
            alt={props.imageAlt5}
            src={props.imageSrc5}
            className="navbar-image1"
          />
          <span className="navbar-text1">Write</span>
        </Link>
        <Link to="/forum" className="navbar-navlink2 button">
          <img
            alt={props.imageAlt6}
            src={props.imageSrc6}
            className="navbar-image2"
          />
          <span className="navbar-text2">Forum</span>
        </Link>
        <Link to="/c-nnovelpage" className="navbar-navlink3 button">
          <span className="navbar-text3">CN</span>
        </Link>
        <Link to="/signin" className="navbar-navlink4 button">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image3"
          />
          <span className="navbar-text4">Sign in</span>
        </Link>
        <Link to="/bookshelf" className="navbar-navlink5 button">
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="navbar-image4"
          />
          <span className="navbar-text5">My bookshelf</span>
        </Link>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links">
              <span className="thq-body-small thq-link">{props.des}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <div className="navbar-link5-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar-trigger"
                >
                  <span className="thq-body-small thq-link">{props.link4}</span>
                  <div className="navbar-icon-container">
                    {link5AccordionOpen && (
                      <div className="navbar-container2">
                        <svg viewBox="0 0 1024 1024" className="navbar-icon02">
                          <path d="M298 426h428l-214 214z" className=""></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar-container3">
                        <svg viewBox="0 0 1024 1024" className="navbar-icon04">
                          <path d="M426 726v-428l214 214z" className=""></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar-container4">
                    <div className="navbar-menu-item">
                      <img
                        alt={props.page1ImageAlt}
                        src={props.page1ImageSrc}
                        className="navbar-page1-image"
                      />
                      <div className="navbar-content">
                        <span className="navbar-page1 thq-body-large">
                          {props.page1}
                        </span>
                        <span className="thq-body-small">
                          {props.page1Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar-menu-item1">
                      <img
                        alt={props.page2ImageAlt}
                        src={props.page2ImageSrc}
                        className="navbar-page2-image"
                      />
                      <div className="navbar-content1">
                        <span className="navbar-page2 thq-body-large">
                          {props.page2}
                        </span>
                        <span className="thq-body-small">
                          {props.page2Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar-menu-item2">
                      <img
                        alt={props.page3ImageAlt}
                        src={props.page3ImageSrc}
                        className="navbar-page3-image"
                      />
                      <div className="navbar-content2">
                        <span className="navbar-page3 thq-body-large">
                          {props.page3}
                        </span>
                        <span className="thq-body-small">
                          {props.page3Description}
                        </span>
                      </div>
                    </div>
                    <div className="navbar-menu-item3">
                      <img
                        alt={props.page4ImageAlt}
                        src={props.page4ImageSrc}
                        className="navbar-page4-image"
                      />
                      <div className="navbar-content3">
                        <span className="navbar-page4 thq-body-large">
                          {props.page4}
                        </span>
                        <span className="thq-body-small">
                          {props.page4Description}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar-buttons">
              <button className="thq-button-filled">{props.action1}</button>
              <button className="thq-button-outline">{props.action2}</button>
            </div>
          </div>
          <div className="navbar-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  page4ImageAlt: 'image',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  imageSrc4: './seg_p2/category-200h.png',
  page1Description: 'Welcome to our novel collection!',
  imageSrc3: './seg_p2/three-books-200h.png',
  page4: 'Contact',
  rootClassName: '',
  page1: 'Home',
  page3ImageAlt: 'image',
  imageAlt6: 'image',
  imageAlt4: 'image',
  page2ImageAlt: 'image',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1622555063306-9930f396f051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQxMDI0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  logoAlt: 'Novel Website Logo',
  link4: '/contact',
  page4Description: 'Get in touch with us.',
  page2Description: 'Discover more about our website and team.',
  imageAlt: 'image',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1515704089429-fd06e6668458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQxMDI0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1598931285896-8890e03b2266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQxMDI0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  imageSrc5: './seg_p2/signature-200h.png',
  page3Description: 'Explore our wide range of novels.',
  action1: 'Main Action',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1617800743727-a4211b97e959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQxMDI0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  page3: 'Novels',
  link3: '/novels',
  action2: 'Secondary Action',
  des: '/home',
  imageAlt3: 'image',
  page2: 'About',
  imageAlt5: 'image',
  page1ImageAlt: 'image',
  link2: '/about',
  imageSrc6: './seg_p2/forum-200h.png',
  imageSrc: './seg_p2/refer-200h.png',
}

Navbar.propTypes = {
  page4ImageAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  imageSrc4: PropTypes.string,
  page1Description: PropTypes.string,
  imageSrc3: PropTypes.string,
  page4: PropTypes.string,
  rootClassName: PropTypes.string,
  page1: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageAlt4: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link4: PropTypes.string,
  page4Description: PropTypes.string,
  page2Description: PropTypes.string,
  imageAlt: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  imageSrc5: PropTypes.string,
  page3Description: PropTypes.string,
  action1: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  page3: PropTypes.string,
  link3: PropTypes.string,
  action2: PropTypes.string,
  des: PropTypes.string,
  imageAlt3: PropTypes.string,
  page2: PropTypes.string,
  imageAlt5: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  link2: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Navbar
