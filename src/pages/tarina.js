import React from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import TextBox from "../components/text-box";
import PersonBox from "../components/person-box";
import RichText from "../components/rich-text";
import SomeBox from "../components/some-box";
import Player from "../components/player";

const RootIndex = (props) => {
  const { person, firstEpisode } = props.data;

  return (
    <Layout location={props.location}>
      <SEO title="Tarina podcastin takaa" />
      <section className="bg-gray-200 py-10 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
            <div className="col-span-2">
              <TextBox title="Tarina">
                <RichText raw={person.bio.raw} />
              </TextBox>

              <TextBox noPadding title="Kuuntele ensimmäinen jakso">
                <div className="w-4/5 px-auto">
                  <h2 className="font-semibold text-xl md:text-2xl text-center mb-5">
                    Ota selvää mistä seurantakoodeissa on kyse
                  </h2>
                  <p className="mb-5">
                    Jotta saat kiinni siitä mitä ovat seurantakoodit, joita
                    podcastissa käytetään, kuuntele podcasaivan ensimmäinen
                    jakso.
                  </p>
                </div>
                <div className="w-full">
                  <Player
                    url={firstEpisode.podbeanUrl}
                    image={firstEpisode.image}
                  />
                </div>
              </TextBox>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-1">
              <PersonBox title="Podcastin isäntä" noLink person={person} />
              <SomeBox person={person} />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query StoryQuery {
    person: contentfulPerson(name: { eq: "Lauri Saarni" }) {
      name
      bio {
        raw
      }
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
    }

    firstEpisode: contentfulEpisode(episodeNumber: { eq: 1 }) {
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
      }
    }
  }
`;
