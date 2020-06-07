import React from "react";

import { withKnobs, text } from "@storybook/addon-knobs";
import Background from "./Background";
import Button from "../components/interaction/Button";
import { Body } from "../components/typography";

export default {
  title: "Interaction",
  decorators: [withKnobs],
};

export const button = () => (
  <Background>
    <Body>
      <Button>{text("Button Content", "Click Me")}</Button>
    </Body>
  </Background>
);
