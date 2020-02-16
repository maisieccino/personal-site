import React from "react";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
import styles from "./layout.module.css";

import { Title, Body, Link } from "../typography";

const mdxMapping = {
  h1: Title,
  p: Body,
  a: ({ children, href }) => <Link to={href}>{children}</Link>
};

const Page = ({ children, title = "", match = {}, padding = false }) => {
  return (
    <article className={[styles.page, padding && styles.paddedPage].join(" ")}>
      <Helmet>
        <title>{title && `${title} -`} Matt Bell</title>
      </Helmet>
      {title && <Title>{title}</Title>}
      <MDXProvider components={mdxMapping}>{children}</MDXProvider>
    </article>
  );
};

export default Page;
