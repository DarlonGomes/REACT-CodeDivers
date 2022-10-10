import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  height: 100%;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  min-height: 30px;
  position: relative;
`;

export { Container, Wrapper };
