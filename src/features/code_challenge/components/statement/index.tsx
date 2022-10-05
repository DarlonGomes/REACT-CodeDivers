import React from "react";

import { Container, Title, Description } from "./style";

interface Description {
  text: string;
}

interface Props {
  title: string;
  paragraphs: Description[];
}

function QuestionStatement(props: Props) {
  const { title, paragraphs } = props;
  return (
    <Container>
      <Title>{title} </Title>
      {paragraphs.map((e) => (
        <Description>{e.text}</Description>
      ))}
    </Container>
  );
}

export default QuestionStatement;
