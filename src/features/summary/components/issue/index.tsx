import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

import { Container, Image, Title, Description, Progress } from "./style";

interface Issues {
  image: string;
  title: string;
  description: string;
}
function Issue(props: Issues) {
  const { image, title, description } = props;
  const status = 55;
  return (
    <Container>
      <Image src={image} alt="image" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Progress>
        <ProgressBar
          completed={status}
          baseBgColor="rgba(255, 255, 255, 0.1)"
          bgColor="rgba(27, 219, 74, 0.5)"
          height="18px"
          width="250px"
          borderRadius="8px"
          labelColor="rgba(0, 0, 0, 0)"
        />
        <p>{status}% COMPLETED</p>
      </Progress>
    </Container>
  );
}

export default Issue;
