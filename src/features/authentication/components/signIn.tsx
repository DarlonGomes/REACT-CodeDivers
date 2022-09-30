/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { NonPrivateInput, PrivateInput } from "../../../components/inputs";
import { Button, Form, Options } from "./style";

interface FormValue {
  email: string;
  password: string;
}
export default function SignInForm() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [values, setValues] = useState<FormValue>({
    email: "",
    password: "",
  });

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStatus((prev) => !prev);
    setValues({
      email: "",
      password: "",
    });
    setTimeout(() => {
      navigate("/sign-in");
    }, 2000);
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
