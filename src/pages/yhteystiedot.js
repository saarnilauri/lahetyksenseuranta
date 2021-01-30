import React from "react";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Container from "../components/container";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div className="px-5">
          <Helmet title={siteTitle} />
          <Container>
            <p className="text-white">Coming soon …</p>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;
