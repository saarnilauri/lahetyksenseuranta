import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import EpisodeCards from "../components/episode-cards";

const NotFoundIndex = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="404 sivua ei löytynyt" />
      <div className="container mx-auto px-5">
        <h1 className="text-white text-md md:text-2xl lg:text-3xl uppercase font-bold mb-5">
          404 - Voi ei!!! Sivua ei löytynyt.
        </h1>
        <p className="text-white mb-10">
          Mutta ei hätää. Ota kuunteluun, joku podcastin jakso ja elämä rullaa
          taas mukavasti.
        </p>
      </div>
      <EpisodeCards episodes={props.data.allContentfulEpisode.edges} />
    </Layout>
  );
};

export default NotFoundIndex;

export const pageQuery = graphql`
  query NotFoundIndexQuery {
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
