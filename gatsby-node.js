const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const episode = path.resolve("./src/templates/episode.js");
    const tag = path.resolve("./src/templates/tag.js");

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
            allContentfulTag {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const episodes = result.data.allContentfulEpisode.edges;
        episodes.forEach((item) => {
          createPage({
            path: `/podcast/${item.node.slug}/`,
            component: episode,
            context: {
              slug: item.node.slug,
            },
          });
        });

        const tags = result.data.allContentfulTag.edges;
        tags.forEach((item) => {
          createPage({
            path: `/tags/${item.node.slug}/`,
            component: tag,
            context: {
              slug: item.node.slug,
            },
          });
        });
      })
    );
  });
};
