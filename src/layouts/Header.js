import React from 'react'
import HBPRainbowLine from '../components/HBPRainbowLine'
import TopNavigation from '../components/TopNavigation'
import './Header.css'
import hbpLogo from '../assets/HBP_logo.svg'

export default () => (
  <div>
    <TopNavigation />
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

  </div>
)
