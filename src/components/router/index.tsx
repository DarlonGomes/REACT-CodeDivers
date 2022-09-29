import React from "react";
import { Routes, Route } from "react-router-dom";

import SignInPage from "../../pages/SignIn";
import SignUpPage from "../../pages/SignUp";

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
  );
}
