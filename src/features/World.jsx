import React from "react";
import Globe from "react-globe.gl";
import { useModeSelector } from "use-light-switch";
import { Overlay } from "../components/layout";
import { OverlayPage } from "../components/layout/Page";
import { Body } from "../components/typography";

const World = () => {
  const style = useModeSelector({
    light: {
      globe: "https://unpkg.com/three-globe/example/img/earth-day.jpg",
    },
    dark: {
      globe: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
    },
    unset: {
      globe: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
    },
  });
  return (
    <Overlay>
      <OverlayPage title="World">
        <Body>A list of places I've been.</Body>
      </OverlayPage>
      <Globe
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.jpg"
        globeImageUrl={style.globe}
        backgroundColor="rgba(0,0,0,0)"
      ></Globe>
    </Overlay>
  );
};

export default World;
