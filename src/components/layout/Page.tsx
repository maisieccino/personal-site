import React, { FC, useEffect, useState } from "react";

import { Title } from "../typography";

import styles from "./layout.module.css";

interface pageProps {
  title?: string;
}

const Page: FC<pageProps> = ({ children, title = "" }) => {
  const [docTitle, _] = useState(document.title);

  useEffect(() => {
    if (title !== "") {
      document.title = `${title} - Matt Bell`;
    } else {
      document.title = docTitle;
    }

    return () => {
      document.title = docTitle;
    };
  });
  return (
    <article className={styles.page}>
      {title && <Title>{title}</Title>}
      {children}
    </article>
  );
};

export default Page;
