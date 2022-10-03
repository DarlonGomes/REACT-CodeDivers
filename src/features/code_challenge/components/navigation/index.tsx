import React from "react";

import { Container, Return, Exercise, Forward } from "./style";

function NavBar() {
  return (
    <Container>
      <Return>Go back</Return>
      <Exercise> Exercise number 2</Exercise>
      <Forward> Go to the next exercise</Forward>
    </Container>
  );
}

export default NavBar;
