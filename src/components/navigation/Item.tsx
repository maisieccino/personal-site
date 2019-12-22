import React, { FC } from "react";
import styles from "./navigation.module.css";

const Item: FC<{ href?: string }> = ({ children, href = "#" }) => (
  <a href={href} className={styles.item}>
    {children}
  </a>
);

export default Item;
