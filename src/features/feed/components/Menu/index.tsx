import React from "react";

import diving from "../../../../assets/diving.png";
import { Category } from "../../../../components/menus";
import { Container, Logotipo } from "./style";

function MainMenu() {
  return (
    <Container>
      <Logotipo>
        <img src={diving} alt="CodeDivers" />
      </Logotipo>
      <Category text="Home" />
      <Category text="Explore" />
      <Category text="Notifications" />
      <Category text="Practice" />
      <Category text="Profile" />
      <Category text="More" />
    </Container>
  );
}

export default MainMenu;
