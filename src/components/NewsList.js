import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const NewsList = ({ news }) =>
  <ul className="three columns clear">
    {news.map(n =>
      <li className="item" key={n.id}>
        <article>
          <h3 className="bullet bullet-bg-orange no-margin">
            {n.title}
          </h3>
          <div className="subtitle">
            {n.subtitle}
          </div>
          <img className="full-width" src={n.image} alt="placeholder" />
          <p>
            {n.content}
          </p>
          <Link to={`/article/${n.id}`} className="read-more align-right clear">
            Read more
          </Link>
        </article>
      </li>,
    )}
  </ul>

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default NewsList
