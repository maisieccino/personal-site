import React, { Component, ReactNode } from "react";

import { Page } from "../components/layout";
import { Body } from "../components/typography";

/* eslint-disable import/no-webpack-loader-syntax */
import Document from "!babel-loader!mdx-loader!./blog.md";

class Home extends Component {
  render(): ReactNode {
    return (
      <Page title="Blog">
        <Document />
      </Page>
    );
  }
}

export default Home;
