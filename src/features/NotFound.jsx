import React, { Component } from "react";

import { Page } from "../components/layout";
import { Body } from "../components/typography";

class NotFound extends Component {
  render() {
    return (
      <Page title="404">
        <Body>What you're looking for, is not here.</Body>
      </Page>
    );
  }
}

export default NotFound;
