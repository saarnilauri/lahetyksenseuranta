import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/layout";
import LargeEpisodePlayer from "../components/large-episode-player";
import SEO from "../components/seo";
import EpisodeCards from "../components/episode-cards";
class RootIndex extends React.Component {
  render() {
    const episodes = get(this, "props.data.allContentfulEpisode.edges");
    const episodesToSlice = episodes.length >= 4 ? 3 : episodes.length;

    return (
      <Layout location={this.props.location}>
        <SEO />
        <LargeEpisodePlayer episode={episodes[0].node} />
        <EpisodeCards episodes={episodes.slice(1, episodesToSlice)} />
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulEpisode(sort: { fields: [published], order: DESC }) {
      edges {
        node {
          contentful_id
          title
          episodeNumber
          slug
          published(formatString: "D.M.YYYY")
          duration
          excerpt {
            excerpt
          }
          podbeanUrl
          tags {
            title
          }
          bibleReference {
            title
            shortName
            text {
              text
            }
          }
          image {
            fluid(maxWidth: 573, maxHeight: 321, resizingBehavior: CROP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
