import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

import { Title } from "../typography";

import styles from "./layout.module.css";

interface pageProps {
  title?: string;
  match?: Object;
}

const Page: FC<pageProps> = ({ children, title = "", match }) => {
  console.log(match != null ? match : `not ${title}`);
  return (
    <CSSTransition
      in={match != null}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles["page-enter"],
        enterActive: styles["page-enter-active"],
        exit: styles["page-exit"],
        exitActive: styles["page-exit-active"]
      }}
    >
      <article className={styles.page}>
        <Helmet>
          <title>{title && `${title} -`} Matt Bell</title>
        </Helmet>
        {title && <Title>{title}</Title>}
        {children}
      </article>
    </CSSTransition>
  );
};

export default withRouter(Page);
