import React from 'react'
import PropTypes from 'prop-types'
import Section from '../components/Section'

const IndexPage = ({ data }) => {
  const sections = data.allContentfulOverviewSection.edges

  return (
    <div>
      {sections.map(section => (
        <Section
          key={section.node.content.id}
          title={section.node.title}
          content={section.node.content.content}
        />
      ))}
    </div>
  )
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
    allContentfulOverviewSection(sort: {fields: [order]}) {
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
