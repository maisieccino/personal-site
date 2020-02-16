import React from "react";

import { Grid, Page } from "../components/layout";
import { Card, CardHeader, CardBody } from "../components/layout/Card";
import { Body } from "../components/typography";
import { withKnobs, text } from "@storybook/addon-knobs";
import Background from "./Background";

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

export const card = () => (
  <Background>
    <Card img="https://unsplash.it/1024/768">
      <CardHeader>{text("Card Header", "Title")}</CardHeader>
      <CardBody>{text("Card content", "Something something")}</CardBody>
    </Card>
  </Background>
);
