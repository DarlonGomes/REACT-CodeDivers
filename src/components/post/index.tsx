/* eslint-disable react/no-unescaped-entities */
import React from "react";

import {
  Container,
  UserImage,
  LeftSide,
  Informative,
  UserBar,
  TextArea,
  OptionBar,
  Option,
  Comment,
  Heart,
  Ellipsis,
} from "./style";

interface Props {
  userImage: string;
  userName: string;
  date: string;
  text: string;
  likeCount: number;
  commentCount: number;
}

function Post(props: Props) {
  const { userImage, userName, date, text, likeCount, commentCount } = props;
  return (
    <Container>
      <LeftSide>
        <UserImage src={userImage} alt="userIcon" />
      </LeftSide>
      <Informative>
        <UserBar>
          <div className="text">
            <h4>{userName}</h4>
            <p>{date}</p>
          </div>
          <Ellipsis />
        </UserBar>
        <TextArea>
          <p>{text}</p>
        </TextArea>
        <OptionBar>
          <Option>
            <Heart />
            <p>{likeCount}</p>
          </Option>
          <Option>
            <Comment />
            <p>{commentCount}</p>
          </Option>
        </OptionBar>
      </Informative>
    </Container>
  );
}

export default Post;
