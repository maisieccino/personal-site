import React from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Header, Body } from "../typography";
import styles from "./layout.module.css";

export const CardGroup = ({ items }) => {
  return (
    <TransitionGroup>
      {items.map((item, i) => (
        <CSSTransition
          key={i}
          classNames={{
            enter: styles["card-enter"],
            enterActive: styles["card-enter-active"],
            exit: styles["card-exit"],
            exitActive: styles["card-exit-active"],
          }}
          timeout={200}
        >
          {item}
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export const CardHeader = ({ children }) => (
  <div className={styles.cardHeader}>
    <Header>{children}</Header>
  </div>
);

export const CardBody = ({ children }) => (
  <div className={styles.cardBody}>
    <Body>{children}</Body>
  </div>
);

export const Card = ({ img, children, className = "", ...props }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <div
        style={{ backgroundImage: `url("${img}")` }}
        className={styles.cardImage}
      />
      {children}
    </div>
  );
};

export default Card;
