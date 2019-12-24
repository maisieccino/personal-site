import React, { Component, ReactNode } from "react";

import { Page } from "../components/layout";
import { Body } from "../components/typography";

class Home extends Component {
  render(): ReactNode {
    return (
      <Page title="Blog">
        <Body>Work in progress. 🚧</Body>
        <Body>One day this will forward you to the blog</Body>
        <Body>
          For now, there's just{" "}
          <a href="https://blog.mbell.dev/">this hyperlink.</a>
        </Body>
      </Page>
    );
  }
}

export default Home;
