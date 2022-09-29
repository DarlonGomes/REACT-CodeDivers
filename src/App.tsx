import React from "react";
import { BrowserRouter } from "react-router-dom";

import RouterNavigator from "./components/router";
import GlobalStyles from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <RouterNavigator />
      </BrowserRouter>
    </>
  );
}

export default App;
