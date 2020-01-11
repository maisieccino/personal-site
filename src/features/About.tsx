import React, { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

import { Page } from "../components/layout";
import { Body } from "../components/typography";

class About extends Component {
  render(): ReactNode {
    return (
      <Page title="About">
        <Body>About</Body>
        <Body>
          What I use. <Link to="/uses">See more</Link>
        </Body>
      </Page>
    );
  }
}

export default About;
