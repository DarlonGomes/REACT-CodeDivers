import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  NonPrivateInput,
  PrivateInput,
} from "../../../components/inputs";
import { Button, Form, Options } from "./style";

interface FormValue {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function SignUpForm() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [values, setValues] = useState<FormValue>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStatus((prev) => !prev);

    setTimeout(() => {
      setValues({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/sign-in");
    }, 2000);
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <NonPrivateInput
        type="text"
        value={values.name}
        callback={handleChange("name")}
        placeholder="Name"
        status={status}
      />
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
      <PrivateInput
        type="password"
        value={values.confirmPassword}
        callback={handleChange("confirmPassword")}
        placeholder="Confirm Password"
        status={status}
      />
      <Options>
        <Link to="/sign-in">Already have an account? Sign in</Link>
        <Button type="submit" disabled={status}>
          Sign In
        </Button>
      </Options>
    </Form>
  );
}
