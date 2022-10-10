import React from "react";

import { NavBar, Wrapper } from "../features/summary/components";
import { Ambient } from "../layouts";

function SummaryPage() {
  return (
    <Ambient>
      <NavBar />
      <Wrapper />
    </Ambient>
  );
}

export default SummaryPage;
