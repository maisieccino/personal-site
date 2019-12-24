import React from "react";

import { Grid, Page } from "../components/layout";

export default {
  title: "Layout"
};

export const page = () => (
  <Page>
    <p>Foo</p>
  </Page>
);

export const grid = () => (
  <Grid>
    <p>Foo</p>
  </Grid>
);
