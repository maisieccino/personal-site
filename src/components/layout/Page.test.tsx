import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import Page from "./Page";

it("Sets document title to page title", () => {
  const div = document.createElement("div");
  const title = "Foobar title";
  ReactDOM.render(<Page title={title}></Page>, div);
  expect(Helmet.peek().title.join("")).toContain(title);
});
