import React from "react";

import Journal from "../Journal";
import Ranking from "../Ranking";
import Search from "../SearchBar";
import { Container } from "./style";

function NewsBar() {
  return (
    <Container>
      <Search />
      <Ranking />
      <Journal />
    </Container>
  );
}

export default NewsBar;
