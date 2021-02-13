import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import H1 from "../components/h1";

const TagsIndex = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Podcastin avainsanat" />
      <H1>Podcastin avainsanat</H1>
      <ul className="px-10">
        {props.data.allContentfulTag.edges.map((item) => (
          <li
            key={item.node.slug}
            className="text-lg list-disc mb-5 px-5 text-white"
          >
            <Link
              to={`/tags/${item.node.slug}`}
              class="font-semibold hover:text-red-500 text-white "
            >
              {item.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagsIndex;

export const pageQuery = graphql`
  query TagQuery {
    allContentfulTag(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
