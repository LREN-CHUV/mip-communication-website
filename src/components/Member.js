import React from 'react'
import PropTypes from 'prop-types'

const Member = ({ name, role, bio, pictureSrc, pictureSrcSet, pictureSizes }) => (
  <div>
    {pictureSrc && (
      <img
        src={pictureSrc}
        srcSet={pictureSrcSet}
        sizes={pictureSizes}
        alt={name}
      />
    )}
    <h1>{name}</h1>
    <div>{role}</div>
    <div>{bio}</div>
  </div>
)

Member.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  bio: PropTypes.string,
  pictureSrc: PropTypes.string,
  pictureSrcSet: PropTypes.string,
  pictureSizes: PropTypes.string,
}

Member.defaultProps = {
  name: '',
  role: '',
  bio: '',
  pictureSrc: '',
  pictureSrcSet: '',
  pictureSizes: '',
}

export default Member
