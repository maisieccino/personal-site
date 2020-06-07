import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Globe from "react-globe.gl";
import { useModeSelector } from "use-light-switch";
import { Overlay } from "../components/layout";
import { OverlayPage } from "../components/layout/Page";
import { Body } from "../components/typography";
import aFont from "../assets/fonts/A.json";
import places, { DESTINATIONS, LONDON } from "./places";

const modeVariables = {
  light: {
    globe: "https://unpkg.com/three-globe/example/img/earth-day.jpg",
  },
  dark: {
    globe: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
  },
  unset: {
    globe: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
  },
};

const onLabelClick = (label) => {
  console.log(label);
};

const World = () => {
  const location = useLocation();
  const globeEl = useRef();
  const modeStyle = useModeSelector(modeVariables);

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 26, lng: 3, altitude: 4 }, 4000);
  }, [location]);

  const arcs = DESTINATIONS.map((place) => ({
    startLat: LONDON.lat,
    startLng: LONDON.lng,
    endLat: place.lat,
    endLng: place.lng,
  }));

  return (
    <Overlay>
      <OverlayPage title="World">
        <Body>A list of places I've been.</Body>
      </OverlayPage>
      <Globe
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        globeImageUrl={modeStyle.globe}
        backgroundColor="rgba(0,0,0,0)"
        ref={globeEl}
        labelsData={places}
        labelDotRadius={0.5}
        labelTypeFace={aFont}
        onLabelClick={(label) => onLabelClick(label)}
        arcsData={arcs}
        arcDashLength={0.01}
        arcDashGap={0.02}
        arcDashAnimateTime={4000}
      ></Globe>
    </Overlay>
  );
};

export default World;
