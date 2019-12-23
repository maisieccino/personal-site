import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";

it("Sets document title to page title", () => {
  const div = document.createElement("div");
  const title = "Foobar title";
  // Re-render to ensure hook is run.
  ReactDOM.render(<Page title={title}></Page>, div);
  ReactDOM.render(<Page title={title}></Page>, div);
  expect(document.title).toContain(title);
});
