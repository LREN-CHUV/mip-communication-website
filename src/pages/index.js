import React, { Component } from 'react'
import NewsList from '../components/NewsList'
import PropTypes from "prop-types"

// This is also known as the "Landing page". It is called "Index.js" to fit Gatsby's convention

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends Component {
  render() {
    const usNewsOnMainEdges = this.props.data.us.edges
    return (
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
          <NewsList news={usNewsOnMainEdges} />
        </section>
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    us: allContentfulNewsOnMain(filter: {
      node_locale: { eq: "en-US" }
    }) {
      edges {
        node {
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
            sizes(maxWidth: 960) {
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
    }
  }
`
