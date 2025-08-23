import React, { Component } from "react";

import { Page } from "../components/layout";
import { Title, Body } from "../components/typography";

import Styles from "./home.module.css";

class Home extends Component {
  render() {
    return (
      <Page className={Styles.page}>
        <Title>Maisie</Title>
        <Body>London, UK</Body>
        <Body>Note: I'm updating this page soon! Watch this space.</Body>
      </Page>
    );
  }
}

export default Home;
