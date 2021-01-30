import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Container from "../components/container";
import LargeEpisodePlayer from "../components/large-episode-player";
import EpisodePreview from "../components/episode-preview";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const episodes = get(this, "props.data.allContentfulEpisode.edges");

    return (
      <Layout location={this.props.location}>
        <div className="px-5">
          <Helmet title={siteTitle} />
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
          excerpt{
            excerpt
          }
          podbeanUrl
          tags {
            title
          }
          bibleReference {
            title
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
