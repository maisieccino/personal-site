import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Page } from "../components/layout";
import { SubHeader, Body, Link } from "../components/typography";

/* eslint-disable import/no-webpack-loader-syntax */
import Document from "../pages/blog.md";

const apiURL = "https://mbell-api.glitch.me/posts/";

const Post = ({ title, excerpt, url }) => (
  <Fragment>
    <SubHeader>{title}</SubHeader>
    <Body>{excerpt}</Body>
    <Body>
      <Link to={url}>Read more</Link>
    </Body>
  </Fragment>
);

const Home = () => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch(apiURL);
        const json = await res.json();
        if (!Array.isArray(json)) {
          setPosts([]);
        } else {
          setPosts(json);
        }
        setIsLoading(false);
      } catch (e) {
        console.err(e);
      }
    })();
  }, [location]);

  return (
    <Page title="Blog">
      <Document />
      {isLoading && <Body>Loading latest posts...</Body>}
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </Page>
  );
};

export default Home;
