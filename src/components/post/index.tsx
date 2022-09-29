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

function Post() {
  return (
    <Container>
      <LeftSide>
        <UserImage />
      </LeftSide>
      <Informative>
        <UserBar>
          <div className="text">
            <h4>Username</h4>
            <p>Sep 29</p>
          </div>
          <Ellipsis />
        </UserBar>
        <TextArea>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </p>
        </TextArea>
        <OptionBar>
          <Option>
            <Heart />
            <p>100</p>
          </Option>
          <Option>
            <Comment />
            <p>67</p>
          </Option>
        </OptionBar>
      </Informative>
    </Container>
  );
}

export default Post;
