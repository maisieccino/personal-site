import React, { Component, useState, useEffect } from "react";

import { Page } from "../components/layout";
import { Body, ExternalLink } from "../components/typography";
import { Card, CardHeader, CardBody } from "../components/layout/Card";

const playlistURL =
  "https://open.spotify.com/playlist/70L5dD8ppo1xeIJoUg8Ehz?si=p2_lCxxyS86A782Uf_iFiQ";

const Music = () => {
  const [songs, setSongs] = useState([]);
  return (
    <Page title="Music">
      <Body>What I'm listening to.</Body>
      <Body>
        A list of songs from my{" "}
        <ExternalLink to={playlistURL}>Daily Rotation</ExternalLink> playlist on
        Spotify.
      </Body>
      <Card>
        <CardHeader>Example Artist</CardHeader>
        <CardBody>Example Track</CardBody>
      </Card>
    </Page>
  );
};

export default Music;
