import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

class IndexPage extends React.Component {
  render() {
    const overviewSections = this.props.data.allContentfulOverviewSection.edges

    return (
      <div>
        {overviewSections.map(section => (
          <div key={section.node.content.id}>
            <h1>{section.node.title}</h1>
            <ReactMarkdown source={section.node.content.content} />
          </div>
        ))}
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulOverviewSection: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.shape({
              content: PropTypes.string.isRequired,
              id: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulOverviewSection {
      edges {
        node {
          title
          content {
            id
            content
          }
        }
      }
    }
  }
`
