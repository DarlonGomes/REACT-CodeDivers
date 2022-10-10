import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Option } from "./style";

interface Props {
  challenges: ChallengeInfo[];
  loading: boolean;
}
interface ChallengeInfo {
  id: string;
  title: string;
}

function ExercisesWrapper(props: Props) {
  const { challenges, loading } = props;
  const navigate = useNavigate();
  return (
    <Container>
      {challenges && !loading && (
        <>
          {challenges.map((e: ChallengeInfo) => (
            <Option
              key={e.id}
              onClick={() => {
                navigate(`/challenge?id=${e.id}`);
              }}
            >
              <p>{e.title}</p>
            </Option>
          ))}
        </>
      )}
      {challenges.length === 0 && !loading && <p>There is nothing new</p>}
      {loading && <h3> Loading </h3>}
    </Container>
  );
}

export default ExercisesWrapper;
