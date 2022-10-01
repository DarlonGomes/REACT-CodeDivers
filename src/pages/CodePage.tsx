import React from "react";

import {
  CodeEditor,
  QuestionStatement,
  CodeHeader,
  NavBar,
} from "../features/code_challenge/components";
import { Ambient, Box } from "../layouts";

function CodePage() {
  return (
    <Ambient>
      <CodeHeader />
      <NavBar />
      <Box>
        <QuestionStatement />
        <CodeEditor />
      </Box>
      <NavBar />
    </Ambient>
  );
}

export default CodePage;
