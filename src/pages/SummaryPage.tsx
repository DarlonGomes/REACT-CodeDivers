import React from "react";

import { summaryInfos } from "../data/constants";
import { NavBar, Wrapper } from "../features/summary/components";
import { Ambient } from "../layouts";

function SummaryPage() {
  return (
    <Ambient>
      <NavBar />
      <Wrapper infos={summaryInfos} />
    </Ambient>
  );
}

export default SummaryPage;
