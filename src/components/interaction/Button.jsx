import React from "react";
import { Body } from "../typography";
import styles from "./interaction.module.css";

const Button = ({ children, onClick = () => {} }) => (
  <button onClick={onClick} className={styles.button}>
    <Body>{children}</Body>
  </button>
);

export default Button;
