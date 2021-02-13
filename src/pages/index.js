import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import LargeEpisodePlayer from "../components/large-episode-player";
import SEO from "../components/seo";
import EpisodeCards from "../components/episode-cards";
import InfoSection from "../components/info-section";
import Container from "../components/container";

const RootIndex = (props) => {
  const episodes = props.data.allContentfulEpisode.edges;
  const episodesToSlice = episodes.length >= 4 ? 3 : episodes.length;
  return (
    <Layout location={props.location}>
      <SEO />
      <Container>
        <LargeEpisodePlayer episode={episodes[0].node} />
        <div className="md:mt-10">
          <EpisodeCards episodes={episodes.slice(1, episodesToSlice)} />
        </div>
      </Container>
      <InfoSection bgImage={props.data.bgMap} person={props.data.person} />
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulEpisode(sort: { fields: [published], order: DESC }) {
      edges {
        node {
          ...episodePreview
        }
      }
    }
    person: contentfulPerson(name: { eq: "Lauri Saarni" }) {
      ...person
    }
    bgMap: contentfulAsset(title: { eq: "bg-map" }) {
      fluid(maxWidth: 1200) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`;

export const episodePreviewFragment = graphql`
  fragment episodePreview on ContentfulEpisode {
    contentful_id
    title
    episodeNumber
    slug
    published(formatString: "D.M.YYYY")
    duration
    podbeanUrl
    excerpt {
      excerpt
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
`;

export const personFragment = graphql`
  fragment person on ContentfulPerson {
    name
    shortBio {
      shortBio
      childMarkdownRemark {
        html
      }
    }
    email
    facebook
    twitter
    instagram
    image {
      fluid(maxWidth: 400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    bio {
      raw
    }
  }
`;
