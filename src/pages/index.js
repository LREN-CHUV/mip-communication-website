import React from 'react'

class IndexPage extends React.Component {
  render() {
    // const usProductEdges = this.props.data.us.edges
    // const deProductEdges = this.props.data.german.edges
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    us: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          productName {
            productName
          }
          image {
            responsiveResolution(width: 75) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    german: allContentfulProduct(filter: { node_locale: { eq: "de" } }) {
      edges {
        node {
          id
          productName {
            productName
          }
          image {
            responsiveResolution(width: 75) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
  }
`
