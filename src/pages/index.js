import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Layout from "../components/layout";
import LargeEpisodePlayer from "../components/large-episode-player";
import SEO from "../components/seo";
class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const episodes = get(this, "props.data.allContentfulEpisode.edges");

    return (
      <Layout location={this.props.location}>
        <SEO />
        <div className="px-5">
          <LargeEpisodePlayer episode={episodes[0].node} />
        </div>
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
          title
          episodeNumber
          slug
          published(formatString: "D.M.YYYY")
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
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            raw
          }
        }
      }
    }
  }
`;
