import * as React from "react";

import diving from "../assets/diving.png";
import { SignInForm } from "../features/authentication/components";
import { Ambient } from "../layouts";
import { Banner, HomeContent } from "../layouts/auth";

export default function SignInPage() {
  return (
    <Ambient>
      <HomeContent>
        <Banner>
          <img className="image" src={diving} alt="diving" />

          <h3>Welcome to CodeDivers</h3>
          <p>Enter your details to sign in</p>
        </Banner>
        <SignInForm />
      </HomeContent>
    </Ambient>
  );
}
