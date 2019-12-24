import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Item: FC<{ to?: string }> = ({ children, to = "#" }) => (
  <Link to={to} className={styles.item}>
    {children}
  </Link>
);

export default Item;
