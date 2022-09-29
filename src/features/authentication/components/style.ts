import styled from "styled-components";

const Form = styled.form`
  margin-top: 20px;
`;

const Button = styled.button`
  border-radius: 4px;
  width: 88px;
  height: 36px;
  border-radius: 5px;
  border: none;
  color: ${(props) => (props.disabled ? "#729BC3" : "#fff")};
  background: ${(props) =>
    props.disabled ? "rgba(255, 255, 255, 0.5)" : "#4498D9"};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14);
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  a {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export { Button, Form, Options };
