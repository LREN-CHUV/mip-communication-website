const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulHome (limit: 100) {
            edges {
              node {
                id
              }
            }
          }
        }
      `
    )
    .then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const homeTemplate = path.resolve(`./src/templates/home.js`)

      _.each(result.data.allContentfulHome.edges, edge => {

        createPage({
          path: `/article/${edge.node.id}/`,
          component: slash(homeTemplate),
          context: {
            id: edge.node.id,
          },
        })

      })

    })

    .then(() => {
      graphql(
        `
          {
            allContentfulNewsAndEvents(limit: 1000) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const newsAndEvents = path.resolve(`./src/templates/news-and-events-template.js`)

        _.each(result.data.allContentfulNewsAndEvents.edges, edge => {
          createPage({
            path: `/article/${edge.node.id}/`,
            component: slash(newsAndEvents),
            context: {
              id: edge.node.id,
            },
          })
        })

        resolve()
      })
    })

  })
}
