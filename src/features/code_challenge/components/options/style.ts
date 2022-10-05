import styled from "styled-components";

const Indicator = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
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

export { Indicator, Option };
