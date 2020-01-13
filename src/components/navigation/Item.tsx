import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const Item: FC<{ to?: string }> = ({ children, to = "#" }) => {
  return (
    <NavLink
      exact
      to={to}
      className={styles.item}
      activeClassName={styles.itemMatched}
    >
      {children}
    </NavLink>
  );
};

export default Item;
