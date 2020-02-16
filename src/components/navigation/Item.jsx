import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const Item = ({ children, to = "#" }) => {
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
