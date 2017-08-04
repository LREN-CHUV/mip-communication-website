import React from 'react'
import Link from 'gatsby-link'
import hbpLogo from '../assets/HBP_logo.svg'
import './Header.css'

// A purely presentational colored line that appears between the header image
// and the navigation. It is composed by the main colors of the Humain Brain Project
// theme (see humanbrainproject.eu)
const HBPRainbowLine = () => (
  <div role="presentation">
    <div className="hbp-rainbow-color bg-red" />
    <div className="hbp-rainbow-color bg-orange" />
    <div className="hbp-rainbow-color bg-yellow" />
    <div className="hbp-rainbow-color bg-blue" />
    <div className="hbp-rainbow-color bg-half-baked" />
    <div className="hbp-rainbow-color bg-blue-dark" />
    <div className="hbp-rainbow-color bg-blue-darker" />
    <div className="hbp-rainbow-color bg-horizon" />
  </div>
)

export default () => (
  <div>
    <div className="header">
      <a href="https://www.humanbrainproject.eu" className="hbp-logo">
        <img src={hbpLogo} alt="Human Brain Project logo" />
      </a>
      <div className="website-name">MEDICAL INFORMATICS PLATFORM</div>
      <div className="tag-line">
        UNDERSTANDING BRAIN DISEASES AND FOSTERING COLLABORATIONS<br />
        BETWEEN BRAIN SCIENCE RESEARCH AND CLINICAL PRACTICE
      </div>
    </div>

    <HBPRainbowLine />

    <div role="navigation">
      <ul className="top-navigation">
        <li className="bullet align-left"><Link to="/">Home</Link></li>
        <li className="bullet align-left"><Link to="/overview">Overview</Link></li>
        <li className="bullet align-left"><Link to="/how-it-works">How it works</Link></li>
        <li className="bullet align-left"><Link to="/health-partners">Health partners</Link></li>
        <li className="bullet align-left"><Link to="/documentation">Documentation</Link></li>
        <li className="bullet align-left"><Link to="/news-and-events">News and events</Link></li>
        <li className="bullet align-left"><Link to="/contact">Contact</Link></li>
        <li className="align-right">
          <a
            href="https://mip.humanbrainproject.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <div className="main-text">Login</div>
            <div className="secondary-text">to platform</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
)
