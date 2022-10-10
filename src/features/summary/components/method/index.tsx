import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Image, Title, Description, Progress } from "./style";

interface Props {
  image: string;
  title: string;
  description: string;
  progress: number;
  id: string;
}
function Method(props: Props) {
  const { image, title, description, progress, id } = props;
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/method?id=${id}`)}>
      <Image src={image} alt="image" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Progress>
        <ProgressBar
          completed={progress}
          baseBgColor="rgba(255, 255, 255, 0.1)"
          bgColor="rgba(27, 219, 74, 0.5)"
          height="18px"
          width="250px"
          borderRadius="8px"
          labelColor="rgba(0, 0, 0, 0)"
        />
        <p>{progress}% COMPLETED</p>
      </Progress>
    </Container>
  );
}

export default Method;
