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

const apiURL = "https://mbell-api.glitch.me/beers/";

const CheckIn = ({ created_at, beer, brewery, ...props }) => {
  const imageURL = beer.beer_label;
  return (
    <Card img={imageURL} {...props}>
      <CardHeader>{beer.beer_name}</CardHeader>
      <CardBody>
        {beer.beer_style} • {brewery.brewery_name}
      </CardBody>
      <CardBody>{created_at}</CardBody>
    </Card>
  );
};

const Beers = () => {
  const location = useLocation();
  const [checkins, setCheckins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the list of songs from the API.
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch(apiURL);
        const json = await res.json();
        setCheckins(json);
        setIsLoading(false);
      }
      catch (e) {
        console.error(e);
      }
    })();
  }, [location]);

  return (
    <Page title="Beers">
      <Body>What I've been drinking.</Body>
      <Body>
        View my{" "}
        <Link to="https://untappd.com/user/mbellgb">Untappd profile</Link>.
      </Body>
      {isLoading && (
        <Body>
          Loading... this may take a few seconds if the API hasn't been used by
          anyone in a while.
        </Body>
      )}
      <CardGroup
        items={checkins.map((checkin) => (
          <CheckIn {...checkin} />
        ))}
      />
    </Page>
  );
};

export default Beers;
