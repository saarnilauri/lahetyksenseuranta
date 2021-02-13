import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import PersonBox from "../components/person-box";
import TextBox, {
  TextBoxBody,
  TextBoxPadder,
  TextBoxTitle,
} from "../components/text-box";

const RootIndex = (props) => {
  const { person } = props.data;

  return (
    <Layout location={props.location}>
      <SEO title="Yhetystiedot" />
      <section className="bg-gray-200 py-10 ">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TextBox>
                <TextBoxTitle>Yhteystiedot</TextBoxTitle>
                <TextBoxBody>
                  <TextBoxPadder>
                    <p className="mb-3">{person.name}</p>
                    <p className="mb-3">{person.email}</p>
                    <p className="mb-3">
                      <a
                        href={person.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-500 hover:text-gray-800"
                      >
                        Facebook
                      </a>
                    </p>
                    <p className="mb-3">
                      <a
                        href={person.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-500 hover:text-gray-800"
                      >
                        Twitter
                      </a>
                    </p>
                    <p className="mb-3">
                      <a
                        href={person.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-500 hover:text-gray-800"
                      >
                        Instagram
                      </a>
                    </p>
                  </TextBoxPadder>
                </TextBoxBody>
              </TextBox>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 md:gap-5 lg:grid-cols-1">
              <PersonBox title="Podcastin isäntä" noLink person={person} />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query ContactsQuery {
    person: contentfulPerson(name: { eq: "Lauri Saarni" }) {
      ...person
    }
  }
`;
