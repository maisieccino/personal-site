import React, { FC } from "react";

import styles from "./navigation.module.css";
import { ReactComponent as LogoSVG } from "../../assets/img/logo-black.svg";

const Logo: FC = () => <LogoSVG className={styles.logo} />;

export default Logo;
