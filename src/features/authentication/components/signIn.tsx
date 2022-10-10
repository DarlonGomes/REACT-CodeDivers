/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { NonPrivateInput, PrivateInput } from "../../../components/inputs";
import { local } from "../../../utils";
import { FormSignIn, SignInResponse } from "../interface";
import { signIn } from "../services";
import { Button, Form, Options } from "./style";

export default function SignInForm() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [values, setValues] = useState<FormSignIn>({
    email: "",
    password: "",
  });

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus((prev) => !prev);
    try {
      const response: AxiosResponse<SignInResponse, any> = await signIn(values);
      local.storeData(response.data);

      setTimeout(() => {
        setStatus((prev) => !prev);
        setValues({
          email: "",
          password: "",
        });
        navigate("/summary");
      }, 2000);
    } catch (error) {
      console.log(error);
      setStatus((prev) => !prev);
      setValues({
        email: "",
        password: "",
      });
      alert("Error");
    }
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <NonPrivateInput
        type="email"
        value={values.email}
        callback={handleChange("email")}
        placeholder="E-mail"
        status={status}
      />
      <PrivateInput
        type="password"
        value={values.password}
        callback={handleChange("password")}
        placeholder="Password"
        status={status}
      />
      <Options>
        <Link to="/sign-up">Doesn't have an account? Sign up</Link>
        <Button type="submit" disabled={status}>
          Sign In
        </Button>
      </Options>
    </Form>
  );
}
