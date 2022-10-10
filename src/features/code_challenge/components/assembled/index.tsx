import React from "react";

import { useQuery } from "../../../../hooks";
import { Box } from "../../../../layouts";
import { gatherChallengeData } from "../../services";
import { local } from "../../../../utils";

import { QuestionStatement, CodeEditor } from "..";

interface Challenge {
  id: string;
  title: string;
  description: string;
  code: string;
  solution: string;
  topicId: string;
  created_at: string;
  isSolved: boolean;
}
function AssembledItems() {
  const query = useQuery();
  const [challenge, setChallenge] = React.useState<Challenge>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function gatherData() {
      const user = local.retrieve();
      const id = query.get("id");
      const response = await gatherChallengeData(id, user.config);
      console.log(response.data.challenge);
      setChallenge(response.data.challenge);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    gatherData();
  }, []);

  return (
    <Box>
      {loading && <h3> Loading </h3>}
      {!loading && challenge && (
        <>
          <QuestionStatement
            title={challenge.title}
            description={challenge.description}
          />
          <CodeEditor solution={challenge.solution} code={challenge.code} />
        </>
      )}
    </Box>
  );
}

export default AssembledItems;
