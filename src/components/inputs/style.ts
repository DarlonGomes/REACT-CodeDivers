import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import styled from "styled-components";

const TextInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props.disabled ? "var(--bg-input-disabled)" : "var(--bg-input-default)"};
  border: 2px solid var(--input-border);
  border-radius: 10px;
  margin-bottom: 10px;
  font-family: "Lexend";
  font-size: 16px;
  color: ${(props) =>
    props.disabled ? "var(--input-disabled)" : "var(--input-text)"};
  box-sizing: border-box;
  padding: 20px;
  ::placeholder {
    color: var(--input-text);
  }
  :focus {
    outline: none;
    border: 2px solid var(--input-focus-border);
  }
`;

const SecretInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props.disabled ? "var(--bg-input-disabled)" : "var(--bg-input-default)"};
  border: 2px solid var(--input-border);
  border-radius: 10px;
  font-family: "Lexend";
  font-size: 16px;
  color: ${(props) =>
    props.disabled ? "var(--input-disabled)" : "var(--input-text)"};
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  ::placeholder {
    color: var(--input-text);
  }
  :focus {
    outline: none;
    border: 2px solid var(--input-focus-border);
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const OpenEye = styled(BsEyeFill)`
  position: absolute;
  color: var(--input-eye);
  right: 20px;

  :hover {
    cursor: pointer;
  }
`;

const ClosedEye = styled(BsEyeSlashFill)`
  position: absolute;
  color: var(--input-eye);
  right: 20px;
  :hover {
    cursor: pointer;
  }
`;

export { TextInput, SecretInput, OpenEye, ClosedEye, Wrapper };
