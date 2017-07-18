import React from 'react'
import PropTypes from 'prop-types'
import groupBy from 'lodash.groupby'
import Section from '../components/Section'
import Member from '../components/Member'

const IndexPage = ({ data }) => {
  const sections = data.allContentfulOverviewSection.edges
  const members = data.allContentfulTeamMember.edges
  const groups = groupBy(members, 'node.group')

  return (
    <div>
      {sections.map(section => (
        <Section
          key={section.node.content.id}
          title={section.node.title}
          content={section.node.content.content}
        />
      ))}

      {Object.keys(groups).map(key => (
        <ul key={key}>
          {groups[key].map(member => (
            <Member
              key={member.node.id}
              name={member.node.name}
              role={member.node.role}
              bio={member.node.bio}
              pictureSrc={member.node.picture.responsiveSizes.src}
              pictureSrcSet={member.node.picture.responsiveSizes.srcSet}
              pictureSizes={member.node.picture.responsiveSizes.sizes}
            />
          ))}
        </ul>
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

    allContentfulTeamMember(sort: {fields: [group, order]}) {
      edges {
        node {
          id
          name
          role
          bio
          picture {
            responsiveSizes(maxWidth: 200, maxHeight: 300) {
              src
              srcSet
              sizes
            }
          }
          group
          order
        }
      }
    }
  }
`
