import React, { Component } from "react";

import { Page } from "../components/layout";
import { Body, Header, Link } from "../components/typography";

class Data extends Component {
  render() {
    return (
      <Page title="Data">
        <Header>Music</Header>
        <Body>
          What I'm listening to. <Link to="/data/music">View</Link>{" "}
        </Body>
        <Header>World</Header>
        <Body>
          Places I've been. <Link to="/data/world">View</Link>
        </Body>
        <Header>Beer</Header>
        <Body>Coming soon.</Body>
      </Page>
    );
  }
}

export default Data;
