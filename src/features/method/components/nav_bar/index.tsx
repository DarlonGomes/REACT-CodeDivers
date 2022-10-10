import React from "react";

import diving from "../../../../assets/diving.png";
import { Container, Logo } from "./style";

function MethodNavBar() {
  return (
    <Container>
      <Logo>
        <img src={diving} alt="logo" />
        <h2>CodeDivers</h2>
      </Logo>
      <div style={{ display: "flex" }}>
        <h3>Summary /</h3>
        <h3>Method</h3>
      </div>
      <div style={{ width: "166.33px" }} />
    </Container>
  );
}

export default MethodNavBar;
