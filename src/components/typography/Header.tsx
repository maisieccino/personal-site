import React, { FC } from "react";
import styles from "./typography.module.css";

const Header: FC = ({ children }) => (
  <h1 className={styles.header}>{children}</h1>
);

export default Header;
