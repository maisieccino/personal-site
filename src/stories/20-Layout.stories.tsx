import React from "react";

import { Grid } from "../components/layout";
import { Page } from "../components/layout/Page";
import { Body } from "../components/typography";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Layout",
  decorators: [withKnobs]
};

export const page = () => (
  <Page title={text("Title", "Some Page")}>
    <Body>Foo</Body>
  </Page>
);

export const grid = () => (
  <Grid>
    <p>Foo</p>
  </Grid>
);
