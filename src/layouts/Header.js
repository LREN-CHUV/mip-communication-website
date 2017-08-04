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

// The top navigation is a two levels menu. When the user hovers an item
// from the first level, the second menu appears (if exists). This is done
// in CSS only
const TopNavigation = () => (
  <div role="navigation">
    <ul className="top-navigation clear">
      <li className="align-left">
        <Link to="/" className="bullet">Home</Link>
      </li>
      <li className="align-left">
        <a href="#" className="bullet">Overview</a>
        <ul className="top-navigation-level-2">
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/how-it-works">How it works</Link></li>
        </ul>
      </li>
      <li className="align-left">
        <span className="bullet">Health partners</span>
        <ul className="top-navigation-level-2">
          <li className="bullet"><Link to="/hospitals">Hospitals</Link></li>
          <li className="bullet"><Link to="/cohorts">Cohorts</Link></li>
        </ul>
      </li>
      <li className="align-left">
        <Link to="/documentation" className="bullet">Documentation</Link>
      </li>
      <li className="align-left">
        <Link to="/news-and-events" className="bullet">News and events</Link>
      </li>
      <li className="align-left">
        <Link to="/contact" className="bullet">Contact</Link>
      </li>
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
    <TopNavigation />
  </div>
)
