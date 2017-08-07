import React from 'react'
import './hospitals.css'

export default () =>
  <div>
    <div className="breadcrumbs-title-container clear">
      <span className="breadcrumbs bullet bullet-border-red bullet-outline">
        Health partners &gt;&nbsp;
      </span>
      <h1 className="breadcrumbs-title">Hospitals</h1>
    </div>
    <article className="two columns clear">
      <section className="item wider">
        <h2 className="bullet bullet-bg-orange no-margin">CHUV</h2>
        <div className="subtitle">Centre Hospitalier Universitaire Vaudois, Switzerland</div>
        <p>
          Thounsands of brain images and terabytes of invaluable associated medical data are
          produced every day at a gigantic pace around the world. the{' '}
          <strong>medical Informatics Platform (MIP)</strong>Y aims to federate this information and
          provide the tools to the experts to effectively analyse it and advance more rapidly in
          understanding the neurological and psychiatric diseases. This will in turn allow{' '}
          <strong>identifying the biological changes</strong> associated and open real possibilities
          for <strong>early diagnosis, personalised treatments and preventive medicine</strong>.
        </p>
        <h3>Leenaards Memory Centre</h3>
        <p>
          The Leenaards Memory Centre (CLM) is a Service of CHUV hosted by the Department of
          Clinical Neuroscience (DNC). CLM has a twofold commitment to the clinical neuroscience of
          ageing-brain cognitive diseases ; first, as an Outpatient Memory Clinics, it carries out
          to the highest standards diagnosis and care of patients with memory and other cognitive
          disorders as well as their families, both at CHUV and in 3 other regional Memory Clinics
          in Vaud; second, CLM develops translational clinical research mainly focused on brain
          imaging and neurophysiology, as well as on cognitive and peripheral (e.g. blood, CSF)
          biomarkers of brain cognitive diseases. CLM also hosts an advanced multimodal registry
          based on automatic recording and processing of clinical individual data (Cohort for
          LEmanic Memory and NeuroScience, CLEMENS) that is key to both monitoring clinical
          activities and facilitating translational research.
        </p>
      </section>
      <div className="item narrower">
        <img
          src="http://lorempixel.com/600/450/business/"
          className="full-width"
          alt="Placeholder"
        />
      </div>
    </article>

    <article className="two columns clear">
      <div className="item narrower">
        <img
          src="http://lorempixel.com/600/450/business/"
          className="full-width"
          alt="Placeholder"
        />
      </div>
      <section className="item wider">
        <h2 className="bullet bullet-bg-orange no-margin">Universitäts Klinikum Freiburg</h2>
        <div className="subtitle">Medical Center – University of Freiburg, Germany</div>
        <p>
          With roughly 10,000 employees, the Medical Center – University of Freiburg is among the
          largest university medical centers in Germany. Around 1,200 doctors and more than 2,900
          nurses provide care to more than 64,000 inpatients and around 580,000 outpatients per
          year. The Medical Center – University of Freiburg engages in research, teaching, and
          healthcare as its core responsibilities, always with the goal of offering its patients
          treatment informed by the latest scientific findings – today and in the future. More
          specifically the departments of Neurology, Psychiatry and Psychotherapy as well as
          Neuroradiology and Neurosurgery will contribute their data to the Medical Informatics
          Platform.
        </p>
      </section>
    </article>

    <article className="two columns clear">
      <section className="item wider">
        <h2 className="bullet bullet-bg-orange no-margin">CHRU</h2>
        <div className="subtitle">Centre Hospitalier Régional Universitaire de Lille, France</div>
        <p>
          The CHRU of Lille cares to more than 94,000 inpatients per year and is comprised within
          the largest research and medicine complex in Europe. The CHRU of Lille plays an active
          role on the national scene of research on brain diseases (3rd university hospital in terms
          of clinical studies and 4th rank in terms of publications) and works closely with the
          University of Lille 2.
        </p>
      </section>
      <div className="item narrower">
        <img
          src="http://lorempixel.com/600/450/business/"
          className="full-width"
          alt="Placeholder"
        />
      </div>
    </article>

    <article className="two columns clear">
      <div className="item narrower">
        <img
          src="http://lorempixel.com/600/450/business/"
          className="full-width"
          alt="Placeholder"
        />
      </div>
      <section className="item wider">
        <h2 className="bullet bullet-bg-orange no-margin">Ospedale Niguarda</h2>
        <div className="subtitle">Grande Ospedale metropolitano Niguarda, Italy</div>
        <p>
          Ospedale Niguarda is a public reference Hospital for Milan and for the rest of Italy. It
          offers all clinical and surgical specialties but its core identity is the ability to
          integrate care competences and technology, from diagnosis to rehabilitation. In terms of
          neuroscience, Ospedale Niguarda coordinates specialist competence and the most up-to-date
          technologies to guarantee a diagnostic and therapeutic excellence path for therapy of
          nervous system pathologies. The strengths are the treatment of the medullar lesions, the
          surgery of pharmacoresistant epilepsy and of Parkinson’s disease, the use of gamma-knife
          for tumor pathologies, the presence of the stroke unit for emergency treatment.
        </p>
      </section>
    </article>

    <article className="two columns clear">
      <section className="item wider">
        <h2 className="bullet bullet-bg-orange no-margin">TASMC</h2>
        <div className="subtitle">Tel Aviv Sourasky Medical Center, Israel</div>
        <p>
          Tel Aviv Sourasky Medical Center is the second largest and one of the most progressive
          full-service healthcare treatment and research institutions in Israël. Medical Center
          physicians integrate their clinical care with research on a daily basis. Each year,
          hundreds of research studies, both basic science and clinical, are conducted within the
          MedicalCenter’s walls, in search of new medical understanding and to develop new
          diagnostic and treatment modalities. The Medical Center leads the country in the number of
          research projects conducted.
        </p>
      </section>
      <div className="item narrower">
        <img
          src="http://lorempixel.com/600/450/business/"
          className="full-width"
          alt="Placeholder"
        />
      </div>
    </article>
  </div>
