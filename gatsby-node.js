const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const episode = path.resolve('./src/templates/episode.js')
    resolve(
      graphql(
        `
          {
            allContentfulEpisode {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulEpisode.edges
        posts.forEach(post => {
          createPage({
            path: `/podcast/${post.node.slug}/`,
            component: episode,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
