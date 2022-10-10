import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  height: 70vh;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  box-sizing: border-box;
  padding: 15px;
  margin-left: 10px;
`;

const Option = styled.div`
  width: 100%;
  height: 30px;
  background-color: blue;
  :hover {
    cursor: pointer;
  }
`;

export { Container, Option };
