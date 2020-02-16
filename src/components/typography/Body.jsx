import React from "react";
import styles from "./typography.module.css";

const Body = ({ children }) => <p className={styles.body}>{children}</p>;

export default Body;
