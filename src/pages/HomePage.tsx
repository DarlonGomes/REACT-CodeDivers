import React from "react";

import { Feed, MainMenu, NewsBar } from "../features/feed/components";
import { Ambient, ContentWrapper } from "../layouts";

function HomePage() {
  return (
    <Ambient>
      <ContentWrapper>
        <MainMenu />
        <Feed />
        <NewsBar />
      </ContentWrapper>
    </Ambient>
  );
}

export default HomePage;
