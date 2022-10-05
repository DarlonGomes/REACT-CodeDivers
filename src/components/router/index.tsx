import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  SignInPage,
  SignUpPage,
  HomePage,
  CodePage,
  SummaryPage,
  ModulePage,
} from "../../pages";

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/code" element={<CodePage />} />
      <Route path="/summary" element={<SummaryPage />} />
      <Route path="/module" element={<ModulePage />} />
    </Routes>
  );
}
