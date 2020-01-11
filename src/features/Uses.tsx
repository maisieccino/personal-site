import React, { Component, ReactNode } from "react";

import { Page } from "../components/layout";
import { Body } from "../components/typography";

class Uses extends Component {
  render(): ReactNode {
    return (
      <Page title="Uses">
        <Body>What I'm using. Coming soon.</Body>
      </Page>
    );
  }
}

export default Uses;
