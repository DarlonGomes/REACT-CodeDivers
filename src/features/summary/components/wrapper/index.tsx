import React from "react";

import Section from "../section";
import { Container } from "./style";

interface Props {
  infos: Infos[];
}

interface Infos {
  title: string;
  issues: Issues[];
}
interface Issues {
  image: string;
  title: string;
  description: string;
}

function Wrapper(props: Props) {
  const { infos } = props;
  return (
    <Container>
      {infos.map((e) => (
        <Section title={e.title} issues={e.issues} />
      ))}
    </Container>
  );
}

export default Wrapper;
