import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  SignInPage,
  SignUpPage,
  HomePage,
  SummaryPage,
  MethodPage,
  ChallengePage,
} from "../../pages";

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/challenge" element={<ChallengePage />} />
      <Route path="/summary" element={<SummaryPage />} />
      <Route path="/method" element={<MethodPage />} />
    </Routes>
  );
}
