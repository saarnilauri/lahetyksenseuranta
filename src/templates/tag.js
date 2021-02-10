import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import EpisodeCards from "../components/episode-cards";

const TagTemplate = (props) => {
  const tag = props.data.contentfulTag;

  return (
    <Layout location={props.location}>
      <SEO title={`Avainsana: ${tag.title}`} />
      <h1 className="text-white text-4xl font-bold uppercase mb-10">
        Avainsanaan &ldquo;{tag.title}&rdquo; liittyvät jaksot
      </h1>
      <EpisodeCards episodes={tag.episode} />
    </Layout>
  );
};
//<LargeEpisodePlayer episode={episode} />

export default TagTemplate;

export const pageQuery = graphql`
  query TagBySlug($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      slug
      episode {
        contentful_id
        title
        episodeNumber
        slug
        published(formatString: "D.M.YYYY")
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
`;
