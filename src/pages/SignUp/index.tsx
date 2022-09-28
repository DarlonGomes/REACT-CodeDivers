import React from "react";

import diving from "../../assets/diving.png";
import SignUpForm from "../../components/forms/auth/signUp";
import { Ambient, Banner, HomeContent } from "../../styles/globalStyle";

export default function SignUpPage() {
  return (
    <Ambient>
      <HomeContent>
        <Banner>
          <img className="image" src={diving} alt="diving" />

          <h3>Welcome to CodeDivers</h3>
          <p>Enter your details to sign up</p>
        </Banner>
        <SignUpForm />
      </HomeContent>
    </Ambient>
  );
}
