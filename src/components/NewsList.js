import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

const NewsList = ({ news }) =>
  <ul className="three columns clear">
    {news.map(({ node }, i) =>
      <li className="item" key={ node.id }>
        <article>
          <h3 className="bullet bullet-bg-orange no-margin">
            {node.title}
          </h3>
          <div className="subtitle">
            {node.subtitle}
          </div>
          {/*<Img  sizes={node.image.sizes} />*/}
          <img className="full-width" src={node.image.sizes.src} alt={node.image.title} />
          <p>
            {node.preview}
          </p>
          <Link to={`/article/${node.id}`} className="read-more align-right clear">
            Read more
          </Link>
        </article>
      </li>,
    )}
  </ul>

export default NewsList
