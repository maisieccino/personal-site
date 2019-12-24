import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Title } from "../typography";

import styles from "./layout.module.css";

interface pageProps {
  title?: string;
}

const Page: FC<pageProps> = ({ children, title = "" }) => {
  return (
    <article className={styles.page}>
      <Helmet>
        <title>{title && `${title} -`} Matt Bell</title>
      </Helmet>
      {title && <Title>{title}</Title>}
      {children}
    </article>
  );
};

export default Page;
