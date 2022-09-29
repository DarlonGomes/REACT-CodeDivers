import React from "react";

import Post from "../../../../components/post";
import { Container, Header } from "./style";

function Feed() {
  return (
    <Container>
      <Header>
        <h2>Home</h2>
      </Header>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;
