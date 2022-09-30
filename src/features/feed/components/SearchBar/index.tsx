import React from "react";

import { Input, Form, SearchIcon } from "./style";

function Search() {
  const [values, setValues] = React.useState({
    name: "",
  });
  const [status, setStatus] = React.useState(false);

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStatus((prev) => !prev);
    setTimeout(() => {
      setStatus((prev) => !prev);
      setValues({
        name: "",
      });
    }, 2000);
  };
  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <SearchIcon />
      <Input
        type="text"
        value={values.name}
        onChange={handleChange("name")}
        placeholder="Search"
        disabled={status}
        autoComplete="off"
      />
    </Form>
  );
}

export default Search;
