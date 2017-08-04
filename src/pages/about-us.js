import React from 'react'
import './about-us.css'

export default () => (
  <div>
    <div className="breadcrumbs-title-container clear">
      <span className="breadcrumbs bullet bullet-border-red bullet-outline">
        Overview &gt;&nbsp;
      </span>
      <h1 className="breadcrumbs-title">About us</h1>
    </div>
    <div className="clear">
      <div className="paragraphs">
        <section>
          <p>
            Thounsands of brain images and terabytes of invaluable associated medical data are
            produced every day at a gigantic pace around the world. the <strong>medical Informatics
            Platform (MIP)</strong>Y aims to federate this information and provide the tools to
            the experts to effectively analyse it and advance more rapidly in understanding the
            neurological and psychiatric diseases. This will in turn allow <strong>identifying
            the biological changes</strong> associated and open real possibilities for <strong>early
            diagnosis, personalised treatments and preventive medicine</strong>.
          </p>
          <p>
            thounsands of brain images and terbytes of invaluable associated medical data are
            produced every day at a gigantic pace around the world. the <strong>medical Informatics
            Platform (MIP)</strong>Y aims to federate this information and provide the tools to
            the experts to effectively analyse it and advance more rapidly in understanding the
            neurological and psychiatric diseases. This will in turn allow <strong>identifying
            the biological changes</strong> associated and open real possibilities for <strong>early
            diagnosis, personalised treatments and preventive medicine</strong>.
          </p>
        </section>

        <section>
          <h2 className="bullet bullet-bg-red">Target audience</h2>
          <p>
            The Medical Informatics Platform is addressing in principal to neuroscientists, clinicians
            and medical professionals across the globe, by providing the tools for accessing and
            analysing millions of brain images and medical files through one single portal. The platform
            is therefore aiming to enhance the decision-making process and permit faster and more
            accurate diagnosis and treatments.
          </p>
        </section>
        <section>
          <h2 className="bullet bullet-bg-red">What to expect</h2>
          <p>
            One of our important goals is to characterise complete disease pathways, from the molecular
            level up to observe disorders of cognition and behavior. Furthermore, identify unique
            combinations of biological and clinical signals (so-called biological disease signatures)
            associated with specific pathways.
          </p>
        </section>
      </div>
      <div className="picture">
        <img src="http://lorempixel.com/600/450/business/" alt="Placeholder" />
      </div>
    </div>
  </div>
)