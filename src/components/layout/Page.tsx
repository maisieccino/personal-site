import React, { FC, useEffect, useState } from "react";

import { Header } from "../typography";

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
    <article>
      {title && <Header>{title}</Header>}
      {children}
    </article>
  );
};

export default Page;
