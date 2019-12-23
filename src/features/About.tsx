import React, { Component, ReactNode } from "react";

import { Page } from "../components/layout";
import { Body } from "../components/typography";

class About extends Component {
  render(): ReactNode {
    return (
      <Page title="About">
        <Body>About</Body>
      </Page>
    );
  }
}

export default About;
