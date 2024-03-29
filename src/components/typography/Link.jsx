import React from "react";
import { Link as RRLink } from "react-router-dom";
import styles from "./typography.module.css";

export const ExternalLink = ({ children, to }) => (
  <a className={styles.link} href={to}>
    {children}
  </a>
);

export default function Link ({ children, to }) {
  // If file or external link
  if (to.match(/(^http|\.[a-z0-9]+$)/)) {
    return <ExternalLink to={to}>{children}</ExternalLink>;
  }
  return (
    <RRLink to={to} className={styles.link}>
      {children}
    </RRLink>
  );
};
