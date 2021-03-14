import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import EpisodeCards from "../components/episode-cards";

const TagTemplate = (props) => {
  const { tag, episodes } = props.data;

  return (
    <Layout location={props.location}>
      <SEO title={`Avainsana: ${tag.title}`} />
      <div className="px-5 md:px-10">
        <h1 className="text-white text-md md:text-2xl lg:text-4xl font-bold uppercase mb-10">
          Avainsanaan &ldquo;{tag.title}&rdquo; liittyvät jaksot
        </h1>
        <EpisodeCards episodes={episodes.nodes} />
      </div>
    </Layout>
  );
};
//<LargeEpisodePlayer episode={episode} />

export default TagTemplate;

export const pageQuery = graphql`
  query TagBySlug($slug: String) {
    tag: contentfulTag(slug: { eq: $slug }) {
      title
    }
    episodes: allContentfulEpisode(
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        ...episodePreview
      }
    }
  }
`;
