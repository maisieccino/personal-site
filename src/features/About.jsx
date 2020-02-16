import React, { Component } from "react";

import { Page } from "../components/layout";

/* eslint-disable import/no-webpack-loader-syntax */
import Document from "!babel-loader!mdx-loader!../pages/about.md";

class About extends Component {
  render() {
    return (
      <Page title="About">
        <Document />
      </Page>
    );
  }
}

export default About;
