import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import './Index.css'

const Template = ({ children }) => (
  <div>
    <Header />
    <div className="content">
      {children()}
    </div>
    <Footer />
  </div>
)

Template.propTypes = {
  children: PropTypes.any, // eslint-disable-line
}

Template.defaultProps = {
  children: null,
}

export default Template
