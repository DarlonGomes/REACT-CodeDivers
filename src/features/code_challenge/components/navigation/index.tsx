import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Return,
  Exercise,
  Forward,
  ArrowBack,
  ArrowForward,
} from "./style";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Return
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBack />
        <p>Go back</p>
      </Return>
      <Exercise>
        <p>Exercise number ??</p>
      </Exercise>
      <Forward>
        <p>Go to the next exercise</p>
        <ArrowForward />
      </Forward>
    </Container>
  );
}

export default NavBar;
