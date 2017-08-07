import React from 'react'
import Link from 'gatsby-link'
import './index.css'

export default () => (
  <div>
    <h1 className="bullet bullet-outline bullet-border-red">Health partners</h1>
    <section>
      <p>
        The first version of the Medical Informatics Platform (MIP) was released in 2016. It
        enables interactive access to brain-related medical information hosted by European hospitals
        and researach centers, and facilitates collaboration on analyses and results towards an
        understanding of brain diseases and neurological disorders.
      </p>
      <p>Five European hospitals and research cohorts have already been recruited.</p>
    </section>
    <div className="two columns clear">
      <div className="item">
        <h2 className="bullet bullet-outline bullet-border-orange large">Hospitals</h2>
        <p>
          The first version of the Medical Informatics Platform (MIP) was released in 2016. It
          enables interactive access to brain-related medical information hosted by European hospitals
          and researach centers, and facilitates collaboration on analyses and results towards an
          understanding of brain diseases and neurological disorders.
        </p>
        <p>Five European hospitals and research cohorts have already been recruited.</p>
        <Link to="/health-partners/hospitals" className="button">
          View partner hospitals
        </Link>
      </div>
      <div className="item">
        <h2 className="bullet bullet-outline bullet-border-orange large">Large cohorts</h2>
        <p>
          The first version of the Medical Informatics Platform (MIP) was released in 2016. It
          enables interactive access to brain-related medical information hosted by European hospitals
          and researach centers, and facilitates collaboration on analyses and results towards an
          understanding of brain diseases and neurological disorders.
        </p>
        <p>Five European hospitals and research cohorts have already been recruited.</p>
        <Link to="/health-partners/cohorts" className="button">
          View partner cohorts
        </Link>
      </div>
    </div>
  </div>
)
