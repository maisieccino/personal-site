import React, { Component } from "react";

import { Page } from "../components/layout";

/* eslint-disable import/no-webpack-loader-syntax */
import Document from "!babel-loader!mdx-loader!../pages/about.md";
import { SubHeader, Body } from "../components/typography";

class About extends Component {
  render() {
    console.log(process.env);
    return (
      <Page title="About">
        <Document />
        <SubHeader>Website</SubHeader>
        {process.env.REACT_APP_VERSION && (
          <Body>Version: {process.env.REACT_APP_VERSION}</Body>
        )}
      </Page>
    );
  }
}

export default About;
