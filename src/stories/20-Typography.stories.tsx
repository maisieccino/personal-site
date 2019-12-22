import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";

import { Body, Header } from "../components/typography";

export default {
  title: "Typography",
  decorators: [withKnobs]
};

export const header = () => (
  <Header>{text("Content", "Example Header")}</Header>
);

export const body = () => (
  <Body>
    Example body text. <i>Italics</i> <u>Underline</u> <a href="#">Link</a>{" "}
    <strong>Bold</strong>
  </Body>
);
