import { BsPlay } from "react-icons/bs";
import styled from "styled-components";

const Indicator = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 20px;
    border-radius: 5px 5px 0 0;
  }
`;

const Option = styled.button`
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px 5px 0 0;
  font-family: "Lexend";
  font-weight: 500;
  border: none;
  border-bottom: 1px solid var(--border-editor);
`;

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Submit = styled.button`
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px 5px 0 0;
  font-family: "Lexend";
  font-weight: 500;
  border: none;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-editor);
`;
const Play = styled(BsPlay)`
  font-size: 30px;
`;
export { Indicator, Option, Wrapper, Play, Submit };
