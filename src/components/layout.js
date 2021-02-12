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
      query Layout {
        bgImage: contentfulAsset(title: { eq: "bg-image" }) {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        siteLogo: contentfulAsset(title: { eq: "ls-logo" }) {
          fixed(width: 45, height: 45) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    `
  );

  return (
    <React.Fragment>
      <HeroBackground bgImage={data.bgImage.fluid}>
        <Navigation location={location} siteLogo={data.siteLogo.fixed} />
        <Container>
          <HeaderText isHomePage={location.pathname === "/"} />
        </Container>
      </HeroBackground>
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Template;
