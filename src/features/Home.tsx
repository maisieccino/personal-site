import React, { Component, ReactNode } from "react";

import { Page } from "../components/layout";
import { Title, Body } from "../components/typography";

class Home extends Component {
  render(): ReactNode {
    return (
      <Page>
        <Title>Matt Bell</Title>
        <Body>Work in progress. 🚧</Body>
        <Body>Come back some time soon.</Body>
      </Page>
    );
  }
}

export default Home;
