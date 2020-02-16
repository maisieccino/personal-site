import React from "react";
import { Link as RRLink } from "react-router-dom";
import styles from "./typography.module.css";

export default ({ children, to }) => (
  <RRLink to={to} className={styles.link}>
    {children}
  </RRLink>
);
