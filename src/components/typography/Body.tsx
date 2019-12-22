import React, { FC } from "react";
import styles from "./typography.module.css";

const Body: FC = ({ children }) => <p className={styles.body}>{children}</p>;

export default Body;
