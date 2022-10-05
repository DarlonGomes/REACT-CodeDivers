import React from "react";

import Section from "../section";
import { Container } from "./style";

interface Props {
  infos: Infos[];
}

interface Infos {
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

function Wrapper(props: Props) {
  const { infos } = props;
  return (
    <Container>
      {infos.map((e) => (
        <Section title={e.title} methods={e.methods} />
      ))}
    </Container>
  );
}

export default Wrapper;
