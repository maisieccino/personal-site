import React, { Component, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Page } from "../components/layout";
import { Body, ExternalLink } from "../components/typography";
import { Card, CardHeader, CardBody } from "../components/layout/Card";

const playlistURL =
  "https://open.spotify.com/playlist/70L5dD8ppo1xeIJoUg8Ehz?si=p2_lCxxyS86A782Uf_iFiQ";
const apiURL = "https://mbell-api.glitch.me/music/";

const Song = ({ artists = [], name = "" }) => (
  <Card>
    <CardHeader>{artists.map(artist => artist.name).join(", ")}</CardHeader>
    <CardBody>{name}</CardBody>
  </Card>
);

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
      setIsLoading(false);
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
      {isLoading ? (
        <Body>Loading...</Body>
      ) : (
        songs.map(song => <Song {...song} />)
      )}
    </Page>
  );
};

export default Music;
