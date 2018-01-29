import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class NewsOnMain extends Component {
  render() {
    const news = this.props.data.contentfulNewsOnMain
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

NewsOnMain.PropTypes = {
  data: PropTypes.object.isRequired
}

export default NewsOnMain

export const pageQuery = graphql`
  query newsOnMainQuery($id: String!) {
    contentfulNewsOnMain(id : { eq: $id }) {
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
