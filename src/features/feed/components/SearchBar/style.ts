import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 25px;
  background-color: var(--bg-input-default);
  margin-top: 5px;
  border: 1px solid var(--input-border);
  color: var(--input-text);
  padding: 0 0 0 40px;
  ::placeholder {
    color: var(--input-text);
  }
  :focus {
    outline: none;
    border: 2px solid var(--input-focus-border);
  }
`;
const SearchIcon = styled(AiOutlineSearch)`
  font-size: 20px;
  color: var(--text-primary);
  position: absolute;
  top: 16px;
  left: 15px;
`;

const Form = styled.form`
  position: relative;
`;

export { Input, Form, SearchIcon };
