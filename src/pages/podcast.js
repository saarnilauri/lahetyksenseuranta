import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import EpisodeCards from "../components/episode-cards";
import Container from "../components/container";
import H1 from "../components/h1";

const PodcastIndex = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Kaikki jaksot" />

      <Container>
        <H1>Lähetysseuranta podcastin kaikki jaksot</H1>
      </Container>
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
