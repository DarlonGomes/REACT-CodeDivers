import React from "react";

import Issue from "../issue";
import { Container, Carousel, Title } from "./style";

interface Props {
  title: string;
  issues: Issues[];
}

interface Issues {
  image: string;
  title: string;
  description: string;
}

function Section(props: Props) {
  const { title, issues } = props;
  return (
    <Container>
      <Title>{title} </Title>
      <Carousel>
        {issues.map((e) => (
          <Issue image={e.image} title={e.title} description={e.description} />
        ))}
      </Carousel>
    </Container>
  );
}

export default Section;
