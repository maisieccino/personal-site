import React, { FC } from "react";

import Item from "./Item";
import Logo from "./Logo";
import styles from "./navigation.module.css";

const Navigation: FC = () => (
  <nav className={styles.navigation}>
    <Logo />
    <Item>Test</Item>
    <Item>Test</Item>
    <Item>Test</Item>
    <Item>Test</Item>
  </nav>
);

export default Navigation;
