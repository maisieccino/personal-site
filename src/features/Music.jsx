import React, { Component, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Page } from "../components/layout";
import { Body, ExternalLink } from "../components/typography";
import { Card, CardHeader, CardBody } from "../components/layout/Card";

const playlistURL =
  "https://open.spotify.com/playlist/70L5dD8ppo1xeIJoUg8Ehz?si=p2_lCxxyS86A782Uf_iFiQ";
const apiURL = "https://mbell-api.glitch.me/music/";

const Music = () => {
  const location = useLocation();
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the list of songs.
  useEffect(() => {
    const inner = async () => {
      setIsLoading(true);
      const res = await fetch(apiURL);
      const json = await res.json();
      setSongs(json.tracks);
    };
    inner();
  }, [location]);

  return (
    <Page title="Music">
      <Body>What I'm listening to.</Body>
      <Body>
        A list of songs from my{" "}
        <ExternalLink to={playlistURL}>Daily Rotation</ExternalLink> playlist on
        Spotify.
      </Body>
      {songs.map(song => (
        <Card>
          <CardHeader>{song.artists.map(a => a.name).join(", ")}</CardHeader>
          <CardBody>{song.name}</CardBody>
        </Card>
      ))}
    </Page>
  );
};

export default Music;
