import React from "react";
import styles from "./typography.module.css";

const SubHeader = ({ children }) => (
  <h1 className={styles.subheader}>{children}</h1>
);

export default SubHeader;
