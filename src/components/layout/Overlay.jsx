import React from "react";
import { Helmet } from "react-helmet";
import styles from "./layout.module.css";

const Overlay = ({ children, title = "", padding = false, className = "" }) => {
  return (
    <article
      className={[styles.overlay, className, padding && styles.paddedPage].join(
        " "
      )}
    >
      <Helmet>
        <title>{title && `${title} -`} Matt Bell</title>
      </Helmet>
      {children}
    </article>
  );
};

export default Overlay;
