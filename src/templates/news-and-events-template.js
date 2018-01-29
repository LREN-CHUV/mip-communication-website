import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class NewsAndEvents extends Component {
  render() {
    const news = this.props.data.contentfulNewsAndEvents
    const {
      titile,
      subtitle,
      image,
      fullContent
    } = news
    return (
      <article>
        <h1>{titile}</h1>
        <p>{subtitle}</p>
        <Img  sizes={image.sizes} />
        <div
          dangerouslySetInnerHTML={{
            __html: fullContent.childMarkdownRemark.html,
          }}
        />
      </article>
    )
  }
}

NewsAndEvents.PropTypes = {
  data: PropTypes.object.isRequired
}

export default NewsAndEvents

export const pageQuery = graphql`
  query NewsAndEventsQuery($id: String!) {
    contentfulNewsAndEvents(id : { eq: $id }) {
      id
      titile
      subtitle
      image {
        title
        resolutions {
          src
          width
          height
          srcSet
          aspectRatio
        }
        sizes(maxWidth: 2000) {
          sizes
          aspectRatio
          src
          srcSet
        }
      }
      content
      fullContent {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
