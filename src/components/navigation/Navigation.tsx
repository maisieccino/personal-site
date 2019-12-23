import React, { FC } from "react";

import Item from "./Item";
import Logo from "./Logo";
import styles from "./navigation.module.css";

const Navigation: FC = () => (
  <nav className={styles.navigation}>
    <Logo />
    <Item>Home</Item>
    <Item>About</Item>
    <Item>Data</Item>
    <Item>Blog</Item>
  </nav>
);

export default Navigation;
