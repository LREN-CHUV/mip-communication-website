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
          allContentfulNewsOnMain (limit: 100) {
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

      const newsOnMainTemplate = path.resolve(`./src/templates/news-on-main.js`)

      _.each(result.data.allContentfulNewsOnMain.edges, edge => {

        createPage({
          path: `/article/${edge.node.id}/`,
          component: slash(newsOnMainTemplate),
          context: {
            id: edge.node.id,
          },
        })

      })

      // resolve()
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
