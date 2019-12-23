import React, { Component, ReactNode } from "react";

import { Page } from "../components/layout";
import { Body } from "../components/typography";

class Data extends Component {
  render(): ReactNode {
    return (
      <Page title="Data">
        <Body>Work in progress. 🚧</Body>
        <Body>Come back some time soon.</Body>
      </Page>
    );
  }
}

export default Data;
