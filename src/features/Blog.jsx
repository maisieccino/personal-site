import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Page } from "../components/layout";
import { SubHeader, Body, Link } from "../components/typography"

/* eslint-disable import/no-webpack-loader-syntax */
import Document from "!babel-loader!mdx-loader!../pages/blog.md";

const apiURL = "https://mbell-api.glitch.me/posts/";

const Post = ({ title, excerpt, url }) => <section style={{display: "flex", flexDirection: "column"}}>
  <SubHeader>{title}</SubHeader>
  <Body>{excerpt}</Body>
  <Body><Link to={url}>Read more</Link></Body>
</section>

const Home = () => {
  const location = useLocation();
  const [ posts, setPosts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(apiURL);
      const json = await res.json();
      setPosts(json);
      setIsLoading(false);
    })();
  }, [location])

    return (
      <Page title="Blog">
        <Document />
      {isLoading && (
        <Body>Loading latest posts...</Body>
        )}
        {posts.map(post => <Post {...post}/>)}
      </Page>
    );
}

export default Home;
