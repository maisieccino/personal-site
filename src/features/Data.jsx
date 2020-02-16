import React, { Component } from "react";

import { Page } from "../components/layout";
import { Body, Header } from "../components/typography";

class Data extends Component {
  render() {
    return (
      <Page title="Data">
        <Header>Music</Header>
        <Body>What I'm listening to</Body>
      </Page>
    );
  }
}

export default Data;
