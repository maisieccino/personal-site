import React from "react";

import { Navigation } from "../components/navigation";

export default {
  title: "Navigation",
  parameters: {
    backgrounds: [
      {
        name: "image",
        value: `url("https://unsplash.it/2560/1440/")`,
        default: true
      }
    ]
  }
};

export const navigationBar = () => <Navigation />;
