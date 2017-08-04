import React from 'react'
import Link from 'gatsby-link'
import './Index.css'

// This is also known as the "Landing page". It is called "Index.js" to fit Gatsby's convention

const mockNews = [
  {
    id: 1,
    title: 'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',
    date: 'Jul. 2, 2017',
    image: 'http://lorempixel.com/400/200/business/',
    content:
      "the MIP is excited to announce the subproject's upcoming Workshop that will take" +
      'place in Málaga, Spain on February 20th, 2017. The event will focus on sharing' +
      'knowledge about diseases cluster management.',
  },
  {
    id: 2,
    title: 'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',
    date: 'Jul. 2, 2017',
    image: 'http://lorempixel.com/400/200/business/',
    content:
      "the MIP is excited to announce the subproject's upcoming Workshop that will take" +
      'place in Málaga, Spain on February 20th, 2017. The event will focus on sharing' +
      'knowledge about diseases cluster management.',
  },
  {
    id: 3,
    title: 'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',
    date: 'Jul. 2, 2017',
    image: 'http://lorempixel.com/400/200/business/',
    content:
      "the MIP is excited to announce the subproject's upcoming Workshop that will take" +
      'place in Málaga, Spain on February 20th, 2017. The event will focus on sharing' +
      'knowledge about diseases cluster management.',
  },
]

export default () => (
  <div>
    <h1 className="hidden">Home</h1>
    <section className="centered">
      <h2 className="large">Our mission</h2>
      <p className="medium">
        The <strong>Medical Informatics Platform</strong> is a Global Open-Source Platform allowing
        hospitals and research centers worldwide to share medical data. It enableds online users to
        access efficiently, accurate and relevant information on brain related diseases, strictly
        preserving patients&#39; confidentiality
      </p>
    </section>
    <section className="centered">
      <h2 className="large">Our vision</h2>
      <p className="medium">
        The Medical Informatics Platform breaks down the traditional barriers between patient&#39;s
        care, brain science research and clinical research to accelerate the identification of brain
        diseases and the most effective treatments
      </p>
    </section>
    <section>
      <h2 className="bullet bullet-outline bullet-border-red">Latest news</h2>
      <ul className="three-columns clear">
        {[
          mockNews.map(news => (
            <li className="item">
              <article className="column-item">
                <h3 className="bullet bullet-bg-orange">
                  {news.title}
                </h3>
                <div className="article-sub-text">
                  {news.date}
                </div>
                <img className="article-image" src={news.image} alt="placeholder" />
                <p>
                  {news.content}
                </p>
                <Link to={`/article/${news.id}`} className="read-more align-right clear">
                  Read more
                </Link>
              </article>
            </li>
          )),
        ]}
      </ul>
    </section>
  </div>
)
