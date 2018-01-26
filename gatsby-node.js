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

        resolve()
      })

  })
}
