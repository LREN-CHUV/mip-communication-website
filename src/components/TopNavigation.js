import React from 'react'
import Link from 'gatsby-link'
import './TopNavigation.css'

// The top navigation is a two levels menu. When the user hovers an item
// from the first level, the second menu appears (if exists). This is done
// in CSS only
export default () => (
  <div role="navigation">
    <ul className="top-navigation clear">
      <li className="align-left">
        <Link to="/" className="bullet">Home</Link>
      </li>
      <li className="align-left">
        <a href="#" className="bullet">Overview</a>
        <ul className="top-navigation-submenu">
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/how-it-works">How it works</Link></li>
        </ul>
      </li>
      <li className="align-left">
        <a href="#" className="bullet">Health partners</a>
        <ul className="top-navigation-submenu">
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
