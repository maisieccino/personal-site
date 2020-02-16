import React from "react";

import { Header, Body } from "../typography";
import styles from "./layout.module.css";

export const CardHeader = ({ children }) => (
  <div>
    <Header>{children}</Header>
  </div>
);

export const CardBody = ({ children }) => (
  <div>
    <Body>{children}</Body>
  </div>
);

export const Card = ({ img, children }) => (
  <div className={styles.card}>
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className={styles.cardImage}
    />
    {children}
  </div>
);

export default Card;
