import React, { Component } from "react";

import { Page } from "../components/layout";

/* eslint-disable import/no-webpack-loader-syntax */
import Document from "../pages/about.md";
import { Header, Body } from "../components/typography";

class About extends Component {
  render() {
    return (
      <Page title="About">
        <Document />
        <Header>Website</Header>
        {process.env.REACT_APP_VERSION && (
          <Body>Version: {process.env.REACT_APP_VERSION}</Body>
        )}
      </Page>
    );
  }
}

export default About;
