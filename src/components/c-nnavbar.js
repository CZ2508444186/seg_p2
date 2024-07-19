import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './c-nnavbar.css'

const CNnavbar = (props) => {
  return (
    <div className="c-nnavbar-container">
      <header data-thq="thq-navbar" className="c-nnavbar-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="c-nnavbar-desktop-menu"></div>
        <div className="c-nnavbar-container1">
          <div
            data-thq="thq-burger-menu"
            className="c-nnavbar-burger-menu"
          ></div>
          <Link to="/" className="c-nnavbar-link">
            {props.link}
          </Link>
        </div>
        <button type="button" className="c-nnavbar-button button">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="c-nnavbar-image"
          />
          <span className="c-nnavbar-text">{props.text}</span>
        </button>
        <Link to="/write" className="c-nnavbar-navlink button">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="c-nnavbar-image1"
          />
          <span className="c-nnavbar-text01">{props.text1}</span>
        </Link>
        <Link to="/forum" className="c-nnavbar-navlink1 button">
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="c-nnavbar-image2"
          />
          <span className="c-nnavbar-text02">{props.text2}</span>
        </Link>
        <Link to="/" className="c-nnavbar-navlink2 button">
          <span className="c-nnavbar-text03">
            <span>EN</span>
            <br></br>
          </span>
        </Link>
        <Link to="/signin" className="c-nnavbar-navlink3 button">
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="c-nnavbar-image3"
          />
          <span className="c-nnavbar-text06">
            <span>登陆</span>
            <br></br>
          </span>
        </Link>
        <Link to="/bookshelf" className="c-nnavbar-navlink4 button">
          <img
            alt={props.imageAlt4}
            src={props.imageSrc4}
            className="c-nnavbar-image4"
          />
          <span className="c-nnavbar-text09">{props.text3}</span>
        </Link>
        <div data-thq="thq-mobile-menu" className="c-nnavbar-mobile-menu">
          <div className="c-nnavbar-nav">
            <div className="c-nnavbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="c-nnavbar-logo"
              />
              <div data-thq="thq-close-menu" className="c-nnavbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="c-nnavbar-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="c-nnavbar-links">
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <div className="c-nnavbar-link5-accordion">
                <div className="c-nnavbar-trigger">
                  <span className="thq-body-small thq-link">{props.link5}</span>
                  <div className="c-nnavbar-icon-container">
                    <div className="c-nnavbar-container2">
                      <svg viewBox="0 0 1024 1024" className="c-nnavbar-icon02">
                        <path d="M298 426h428l-214 214z"></path>
                      </svg>
                    </div>
                    <div className="c-nnavbar-container3">
                      <svg viewBox="0 0 1024 1024" className="c-nnavbar-icon04">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="c-nnavbar-container4">
                  <div className="c-nnavbar-menu-item">
                    <img
                      alt={props.page1ImageAlt}
                      src={props.page1ImageSrc}
                      className="c-nnavbar-page1-image"
                    />
                    <div className="c-nnavbar-content">
                      <span className="c-nnavbar-page1 thq-body-large">
                        {props.page1}
                      </span>
                      <span className="thq-body-small">
                        {props.description1}
                      </span>
                    </div>
                  </div>
                  <div className="c-nnavbar-menu-item1">
                    <img
                      alt={props.page2ImageAlt}
                      src={props.page2ImageSrc}
                      className="c-nnavbar-page2-image"
                    />
                    <div className="c-nnavbar-content1">
                      <span className="c-nnavbar-page2 thq-body-large">
                        {props.page2}
                      </span>
                      <span className="thq-body-small">
                        {props.description2}
                      </span>
                    </div>
                  </div>
                  <div className="c-nnavbar-menu-item2">
                    <img
                      alt={props.page3ImageAlt}
                      src={props.page3ImageSrc}
                      className="c-nnavbar-page3-image"
                    />
                    <div className="c-nnavbar-content2">
                      <span className="c-nnavbar-page3 thq-body-large">
                        {props.page3}
                      </span>
                      <span className="thq-body-small">
                        {props.description3}
                      </span>
                    </div>
                  </div>
                  <div className="c-nnavbar-menu-item3">
                    <img
                      alt={props.page4ImageAlt}
                      src={props.page4ImageSrc}
                      className="c-nnavbar-page4-image"
                    />
                    <div className="c-nnavbar-content3">
                      <span className="c-nnavbar-page4 thq-body-large">
                        {props.page4}
                      </span>
                      <span className="thq-body-small">
                        {props.description4}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="c-nnavbar-buttons">
              <button className="thq-button-filled">{props.action1}</button>
              <button className="thq-button-outline">{props.action2}</button>
            </div>
          </div>
          <div className="c-nnavbar-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

CNnavbar.defaultProps = {
  link3: 'EN',
  page1: 'Home',
  description3: 'Explore our wide range of novels.',
  description1: 'Welcome to our novel collection!',
  imageSrc4: '/three-books-200h.png',
  text1: '写作',
  imageAlt: 'image',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1598931285896-8890e03b2266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQxMDI0M3w&ixlib=rb-4.0.3&q=80&w=200',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  page4ImageAlt: 'image',
  page4: 'Contact',
  description2: 'Discover more about our website and team.',
  imageSrc2: '/forum-200h.png',
  button: 'Button',
  text2: '论坛',
  action1: 'Main Action',
  page3ImageAlt: 'image',
  text3: '我的书架',
  action2: 'Secondary Action',
  link5: '/contact',
  page2: 'About',
  imageSrc: '/category-200h.png',
  imageAlt2: 'image',
  page3: 'Novels',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1515704089429-fd06e6668458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQxMDI0M3w&ixlib=rb-4.0.3&q=80&w=200',
  imageSrc3: '/refer-200h.png',
  imageAlt3: 'image',
  page1ImageAlt: 'image',
  imageSrc1: '/signature-200h.png',
  imageAlt1: 'image',
  link2: '/home',
  logoAlt: 'Novel Website Logo',
  page2ImageAlt: 'image',
  link4: '/novels',
  description4: 'Get in touch with us.',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1622555063306-9930f396f051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQxMDI0Mnw&ixlib=rb-4.0.3&q=80&w=200',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1617800743727-a4211b97e959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQxMDI0M3w&ixlib=rb-4.0.3&q=80&w=200',
  text: '全部作品',
  link: '终点文学网',
  imageAlt4: 'image',
}

CNnavbar.propTypes = {
  link3: PropTypes.string,
  page1: PropTypes.string,
  description3: PropTypes.string,
  description1: PropTypes.string,
  imageSrc4: PropTypes.string,
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  logoSrc: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  page4: PropTypes.string,
  description2: PropTypes.string,
  imageSrc2: PropTypes.string,
  button: PropTypes.string,
  text2: PropTypes.string,
  action1: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  text3: PropTypes.string,
  action2: PropTypes.string,
  link5: PropTypes.string,
  page2: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
  page3: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  link4: PropTypes.string,
  description4: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  imageAlt4: PropTypes.string,
}

export default CNnavbar
