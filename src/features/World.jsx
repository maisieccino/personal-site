import React, { useState } from "react";
import Globe from "react-globe.gl";
import { useModeSelector } from "use-light-switch";
import { Overlay } from "../components/layout";
import { OverlayPage } from "../components/layout/Page";
import { Body } from "../components/typography";
import { Button } from "../components/interaction";
import styles from "../components/layout/layout.module.css";

const World = () => {
  const [overlayVisible, setOverlayVisibility] = useState(true);
  const hideOverlay = () => {
    setOverlayVisibility(false);
  };
  const style = useModeSelector({
    light: {
      globe: "https://unpkg.com/three-globe/example/img/earth-day.jpg",
      bg: "#ffffff",
    },
    dark: {
      globe: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
      bg: "#000000",
    },
    unset: {
      globe: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
      bg: "#000000",
    },
  });
  return (
    <Overlay>
      <Globe
        globeImageUrl={style.globe}
        showGraticules
        backgroundColor={style.bg}
      ></Globe>
      <OverlayPage
        title="World"
        className={overlayVisible ? "" : styles.overlayHidden}
        aria-hidden={!overlayVisible}
      >
        <Body>A list of places I've been.</Body>
        <Body>
          <Button onClick={() => hideOverlay()}>Hide</Button>
        </Body>
      </OverlayPage>
    </Overlay>
  );
};

export default World;
