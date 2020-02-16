import React, { Component } from "react";

import { Page } from "../components/layout";

/* eslint-disable import/no-webpack-loader-syntax */
import Document from "!babel-loader!mdx-loader!../pages/blog.md";

class Home extends Component {
  render() {
    return (
      <Page title="Blog">
        <Document />
      </Page>
    );
  }
}

export default Home;
