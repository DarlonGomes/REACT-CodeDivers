import React from "react";

import {
  Container,
  Return,
  Exercise,
  Forward,
  ArrowBack,
  ArrowForward,
} from "./style";

function NavBar() {
  return (
    <Container>
      <Return>
        <ArrowBack />
        <p>Go back</p>
      </Return>
      <Exercise>
        <p>Exercise number 2</p>
      </Exercise>
      <Forward>
        <p>Go to the next exercise</p>
        <ArrowForward />
      </Forward>
    </Container>
  );
}

export default NavBar;
