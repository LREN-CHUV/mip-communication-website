import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Template = ({ children }) => (
  <div>
    <Header />
    {children()}
    <Footer />
  </div>
)

Template.propTypes = {
  children: PropTypes.any,
}

Template.defaultProps = {
  children: null,
}

export default Template
