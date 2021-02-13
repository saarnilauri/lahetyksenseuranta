import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import EpisodeCards from "../components/episode-cards";

const PodcastIndex = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Kaikki jaksot" />
      <EpisodeCards episodes={props.data.allContentfulEpisode.edges} />
    </Layout>
  );
};

export default PodcastIndex;

export const pageQuery = graphql`
  query PodcastIndexQuery {
    allContentfulEpisode(sort: { fields: [published], order: DESC }) {
      edges {
        node {
          ...episodePreview
        }
      }
    }
  }
`;
