import React from "react";

import Post from "../../../../components/post";
import { Container, Header } from "./style";

function Feed() {
  const postInfo = {
    userImage:
      "https://i1.wp.com/www.dci.com.br/wp-content/uploads/2020/09/20490-1130x580.jpg",
    userName: "El_Mestre",
    date: "Sep 29",
    text: ` Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing`,
    likeCount: 100,
    commentCount: 67,
  };
  return (
    <Container>
      <Header>
        <h2>Home</h2>
      </Header>
      <Post
        userImage={postInfo.userImage}
        userName={postInfo.userName}
        date={postInfo.date}
        text={postInfo.text}
        likeCount={postInfo.likeCount}
        commentCount={postInfo.commentCount}
      />
      <Post
        userImage={postInfo.userImage}
        userName={postInfo.userName}
        date={postInfo.date}
        text={postInfo.text}
        likeCount={postInfo.likeCount}
        commentCount={postInfo.commentCount}
      />
      <Post
        userImage={postInfo.userImage}
        userName={postInfo.userName}
        date={postInfo.date}
        text={postInfo.text}
        likeCount={postInfo.likeCount}
        commentCount={postInfo.commentCount}
      />
      <Post
        userImage={postInfo.userImage}
        userName={postInfo.userName}
        date={postInfo.date}
        text={postInfo.text}
        likeCount={postInfo.likeCount}
        commentCount={postInfo.commentCount}
      />
      <Post
        userImage={postInfo.userImage}
        userName={postInfo.userName}
        date={postInfo.date}
        text={postInfo.text}
        likeCount={postInfo.likeCount}
        commentCount={postInfo.commentCount}
      />
      <Post
        userImage={postInfo.userImage}
        userName={postInfo.userName}
        date={postInfo.date}
        text={postInfo.text}
        likeCount={postInfo.likeCount}
        commentCount={postInfo.commentCount}
      />
    </Container>
  );
}

export default Feed;
