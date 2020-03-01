import React from "react";

import Styles from "./typography.module.css";

const BlockQuote = ({ children }) => (
  <blockquote className={Styles.blockQuote}>{children}</blockquote>
);

export default BlockQuote;
