import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";

import { BrowserRouter as Router } from "react-router-dom";
import { Body, Header, Link } from "../components/typography";
import Background from "./Background";

export default {
  title: "Typography",
  decorators: [withKnobs]
};

export const header = () => (
  <Background>
    <Header>{text("Content", "Example Header")}</Header>
  </Background>
);

export const body = () => (
  <Background>
    <Body>
      Example body text. <i>Italics</i> <u>Underline</u> <strong>Bold</strong>
    </Body>
  </Background>
);

export const link = () => (
  <Router>
    <Background>
      <Body>
        <Link to={{}}>{text("Link content", "blog")}</Link>
      </Body>
    </Background>
  </Router>
);
