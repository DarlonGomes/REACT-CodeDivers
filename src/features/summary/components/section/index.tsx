import React from "react";

import Method from "../method";
import { Container, Carousel, Title } from "./style";

interface Props {
  title: string;
  methods: Methods[];
}

interface Methods {
  image: string;
  title: string;
  description: string;
  progress: number;
  id: string;
}

function Section(props: Props) {
  const { title, methods } = props;

  return (
    <Container>
      <Title>{title} </Title>
      <Carousel>
        {methods.map((e) => (
          <Method
            id={e.id}
            image={e.image}
            title={e.title}
            description={e.description}
            progress={e.progress}
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default Section;
