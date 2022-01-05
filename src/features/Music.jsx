import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Page } from "../components/layout";
import { Body, Link } from "../components/typography";
import {
  Card,
  CardHeader,
  CardBody,
  CardGroup,
} from "../components/layout/Card";

const playlistURL =
  "https://open.spotify.com/playlist/70L5dD8ppo1xeIJoUg8Ehz?si=p2_lCxxyS86A782Uf_iFiQ";
const apiURL = "https://mbell-api.glitch.me/music/";

const Song = ({ artists = [], name = "", images = [], ...props }) => {
  const imageURL = images.sort((a, b) => b.width - a.width)[0].url;
  return (
    <Card img={imageURL} {...props}>
      <CardHeader>{artists.map((artist) => artist.name).join(", ")}</CardHeader>
      <CardBody>{name}</CardBody>
    </Card>
  );
};

const Music = () => {
  const location = useLocation();
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the list of songs from the API.
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(apiURL);
      const json = await res.json();
      setSongs(json.tracks);
      setIsLoading(false);
    })();
  }, [location]);

  return (
    <Page title="Music">
      <Body>What I'm listening to.</Body>
      <Body>
        A list of songs from my <Link to={playlistURL}>Daily Rotation</Link>{" "}
        playlist on Spotify. It's updated every few weeks.
      </Body>
      {isLoading && (
        <Body>
          Loading... this may take a few seconds if the API hasn't been used by
          anyone in a while.
        </Body>
      )}
      <CardGroup
        items={songs.map((song) => (
          <Song {...song} />
        ))}
      />
    </Page>
  );
};

export default Music;
