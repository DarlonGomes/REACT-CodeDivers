/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Container, Option, Title } from "./style";

interface Props {
  title: string;
  topics: Topic[];
  setChallenges: React.Dispatch<React.SetStateAction<Challenge[]>>;
  loading: boolean;
}

interface Topic {
  id: string;
  created_at: string;
  methodId: string;
  title: string;
  challenges: Challenge[];
}

interface Challenge {
  id: string;
  title: string;
}
function SideBar(props: Props) {
  const { title, topics, setChallenges, loading } = props;
  return (
    <Container>
      {!loading && (
        <>
          <Title>{title}</Title>
          {topics.map((e: Topic) => (
            <Option key={e.id} onClick={() => setChallenges(e.challenges)}>
              <p>{e.title}</p>
            </Option>
          ))}
        </>
      )}
      {loading && <h3>Loading</h3>}
    </Container>
  );
}

export default SideBar;
