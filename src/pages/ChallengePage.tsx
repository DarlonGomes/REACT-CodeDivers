import React from "react";

import {
  Assembled,
  CodeHeader,
  NavBar,
} from "../features/code_challenge/components";
import { Ambient } from "../layouts";

function ChallengePage() {
  return (
    <Ambient>
      <CodeHeader />
      <Assembled />
      <NavBar />
    </Ambient>
  );
}

export default ChallengePage;
