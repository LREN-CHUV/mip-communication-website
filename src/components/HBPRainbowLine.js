import React from 'react'
import './HBPRainbowLine.css'

// A purely presentational colored line that appears between the header image
// and the navigation. It is composed by the main colors of the Humain Brain Project
// theme (see humanbrainproject.eu)
export default () => (
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
