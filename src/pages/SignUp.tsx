import * as React from "react";

import diving from "../assets/diving.png";
import { SignUpForm } from "../features/authentication/components";
import { Ambient } from "../layouts";
import { Banner, HomeContent } from "../layouts/auth";

export default function SignUpPage(): JSX.Element {
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
