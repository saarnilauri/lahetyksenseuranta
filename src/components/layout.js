import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Container from "./container";
import Navigation from "./navigation";
import HeaderText from "./header-text";
import HeroBackground from "./hero-background";
import Footer from "./footer";

const Template = ({ children, location }) => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulAsset(title: { eq: "bg-image" }) {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    `
  );

  return (
    <React.Fragment>
      <HeroBackground bgImage={data.contentfulAsset.fluid}>
        <Navigation location={location} />
        <Container>
          <HeaderText isHomePage={location.pathname === "/"} />
        </Container>
      </HeroBackground>
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
};
export default Template;
