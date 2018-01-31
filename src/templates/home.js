import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class Home extends Component {
  render() {
    const news = this.props.data.contentfulHome
    const {
      title,
      subtitle,
      image,
      content
    } = news
    return (
      <article>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Img sizes={image.sizes} />
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </article>
    )
  }
}

Home.PropTypes = {
  data: PropTypes.object.isRequired
}

export default Home

export const pageQuery = graphql`
  query homeQuery($id: String!) {
    contentfulHome(id : { eq: $id }) {
      id
      title
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
      preview
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
