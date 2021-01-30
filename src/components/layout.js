import React from "react";
import Container from "./container";
import Navigation from "./navigation";
import HeaderText from "./header-text";
import HeroBackground from "./hero-background";
import Footer from "./footer";

const Template = ({ children, location }) => (
  <React.Fragment>
    <HeroBackground>
      <Navigation location={location} />
      <Container>
        <HeaderText isHomePage={location.pathname === "/"} />
      </Container>
    </HeroBackground>
    <Container>{children}</Container>
    <Footer />
  </React.Fragment>
);

export default Template;
