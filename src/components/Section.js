import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const Section = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <ReactMarkdown source={content} />
  </div>
)

Section.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

Section.defaultProps = {
  title: '',
  content: '',
}

export default Section
