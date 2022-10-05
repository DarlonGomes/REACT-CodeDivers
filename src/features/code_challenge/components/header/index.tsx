import React from "react";

import diving from "../../../../assets/diving.png";
import { Container, Logo } from "./style";

function CodeHeader() {
  return (
    <Container>
      <Logo>
        <img src={diving} alt="CodeDivers logo" />
        <h2>CodeDivers</h2>
      </Logo>
    </Container>
  );
}

export default CodeHeader;
