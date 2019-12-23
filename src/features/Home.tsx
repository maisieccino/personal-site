import React, { Component, ReactNode } from "react";

import { Page } from "../components/layout";
import { Body } from "../components/typography";

class Home extends Component {
  render(): ReactNode {
    return (
      <Page title="Matt Bell">
        <Body>Work in progress. 🚧</Body>
      </Page>
    );
  }
}

export default Home;
