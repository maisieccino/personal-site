import React from "react";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
import styles from "./layout.module.css";

import {
  Title,
  BlockQuote,
  Body,
  Link,
  ExternalLink,
  SubHeader,
  Header,
  ListItem,
} from "../typography";

const mdxMapping = {
  h1: Title,
  h2: Header,
  h3: SubHeader,
  p: Body,
  a: ({ children, href, isExternal }) =>
    isExternal ? (
      <ExternalLink to={href}>{children}</ExternalLink>
    ) : (
      <Link to={href}>{children}</Link>
    ),
  blockquote: BlockQuote,
  li: ListItem,
};

const Page = ({
  children,
  title = "",
  match = {},
  padding = false,
  className = "",
  ...rest
}) => {
  return (
    <article
      className={[styles.page, className, padding && styles.paddedPage].join(
        " "
      )}
      {...rest}
    >
      <Helmet>
        <title>{title && `${title} -`} Matt Bell</title>
      </Helmet>
      {title && <Title>{title}</Title>}
      <MDXProvider components={mdxMapping}>{children}</MDXProvider>
    </article>
  );
};

export const OverlayPage = ({ children, className = "", ...props }) => (
  <Page {...props} className={`${className} ${styles.overlayPage}`}>
    {children}
  </Page>
);

export default Page;
