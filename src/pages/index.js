import React, { Component } from 'react'
import HomeList from '../components/HomeList'
import PropTypes from "prop-types"

// This is also known as the "Landing page". It is called "Index.js" to fit Gatsby's convention

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends Component {
  render() {
    const edges= this.props.data.us.edges
    return (
      <div>
        <h1 className="hidden">Home</h1>
        <HomeList news={edges} />
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const indexQuery = graphql`
query indexQuery {
  us: allContentfulHome(filter: {
    node_locale: { eq: "en-US" }
  }) {
    edges {
      node {
        id
        title
        subtitle
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`
