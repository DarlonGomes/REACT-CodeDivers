import React from "react";

import diving from "../../../../assets/diving.png";
import { Container, Logo } from "./style";

function SummaryNavBar() {
  return (
    <Container>
      <Logo>
        <img src={diving} alt="logo" />
        <h2>CodeDivers</h2>
      </Logo>
    </Container>
  );
}

export default SummaryNavBar;
