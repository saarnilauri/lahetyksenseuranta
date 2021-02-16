import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LargeEpisodePlayer from "../components/large-episode-player";
import RichText from "../components/rich-text";

const EpisodeTemplate = (props) => {
  const episode = props.data.contentfulEpisode;

  return (
    <Layout location={props.location}>
      <SEO
        title={`Lähetyksenseuranta podcast: Jakso ${episode.episodeNumber} - ${episode.title}`}
        description={episode.excerpt.excerpt}
        image={episode.image.fixed.src}
      />
      <LargeEpisodePlayer episode={episode} />

      <div className="container md:px-10 md:py-10 mx-auto md:grid md:grid-cols-2 md:gap-10">
        <div className="bg-white py-5 px-5">
          <RichText raw={episode.description.raw} />
        </div>
        <div className="bg-gray-700 text-white py-5 px-5 bible-verses">
          <h3 className="font-bold uppercase text-lg md:text-2xl lg:text-xl xl:text-2xl mb-5">
            Jaksoon liittyvä Raamatun teksti
          </h3>
          {episode.bibleReference.map((item) => (
            <div className="mb-5 bg-gray-900 py-2 px-5">
              <h4 className="font-bold mb-2 text-red-500">{item.title}</h4>
              <p className="text-sm">{item.text.text}</p>
            </div>
          ))}

          <h3 className="font-bold uppercase text-lg md:text-2xl lg:text-xl xl:text-2xl mb-5">
            Avainsanat
          </h3>
          <ul className="px-5">
            {episode.tags.map((item) => (
              <li key={item.title} className="text-sm list-disc mb-2">
                <Link
                  to={`/tags/${item.slug}`}
                  class="hover:text-red-500 text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
//<LargeEpisodePlayer episode={episode} />

export default EpisodeTemplate;

export const pageQuery = graphql`
  query EpisodeBySlug($slug: String!) {
    contentfulEpisode(slug: { eq: $slug }) {
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
        slug
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
        fixed(width: 1200, height: 628, quality: 90, resizingBehavior: CROP) {
          ...GatsbyContentfulFixed_noBase64
        }
      }
      description {
        raw
      }
    }
  }
`;
