import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 650px;
  position: sticky;
  top: 0px;
  left: 0;
`;

const Logotipo = styled.div`
  width: 100%;
  height: 58px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  img {
    width: 35px;
    height: 35px;
    filter: invert(100%);
  }
`;

export { Logotipo, Container };
