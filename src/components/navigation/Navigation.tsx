import React, { FC } from "react";

import Item from "./Item";
import Logo from "./Logo";
import styles from "./navigation.module.css";

const Navigation: FC = () => (
  <nav className={styles.navigation}>
    <Logo />
    <Item to="/">Home</Item>
    <Item to="/about">About</Item>
    <Item to="/data">Data</Item>
    <Item to="/blog">Blog</Item>
  </nav>
);

export default Navigation;
