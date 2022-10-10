import React from "react";

import { Container, Title, Description } from "./style";

interface Props {
  title: string;
  description: string;
}

function QuestionStatement(props: Props) {
  const { title, description } = props;
  return (
    <Container>
      <Title>{title} </Title>
      <Description>{description}</Description>
    </Container>
  );
}

export default QuestionStatement;
