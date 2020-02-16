import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
import { CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

import { Title, Body, Link } from "../typography";

import styles from "./layout.module.css";

const mdxMapping = {
  h1: Title,
  p: Body,
  a: ({ children, href }) => <Link to={href}>{children}</Link>
};
interface pageProps {
  title?: string;
  match?: Object;
  padding?: boolean;
}

export const Page: FC<pageProps> = ({
  children,
  title = "",
  match = {},
  padding = false
}) => {
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
      <article
        className={[styles.page, padding && styles.paddedPage].join(" ")}
      >
        <Helmet>
          <title>{title && `${title} -`} Matt Bell</title>
        </Helmet>
        {title && <Title>{title}</Title>}
        <MDXProvider components={mdxMapping}>{children}</MDXProvider>
      </article>
    </CSSTransition>
  );
};

export const RoutedPage = withRouter(Page);
