import React from "react";

import Styles from "./typography.module.css";

export const UnorderedList = ({ children }) => (
  <ul className={Styles.ul}>{children}</ul>
);

export const ListItem = ({ children }) => (
  <li className={Styles.li}>{children}</li>
);
