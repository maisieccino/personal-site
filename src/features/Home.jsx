import React, { Component } from "react";

import { Page } from "../components/layout";
import { Title, Body } from "../components/typography";

import Styles from "./home.module.css";

class Home extends Component {
  render() {
    return (
      <Page className={Styles.page}>
        <Title>Maisie Bell</Title>
        <Body>Software Engineer</Body>
        <Body>London, UK</Body>
      </Page>
    );
  }
}

export default Home;
