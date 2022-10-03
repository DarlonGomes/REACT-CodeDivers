import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 7vh;
  background-color: var(--bg-input-disabled);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  margin-bottom: 30px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 35px;
    height: 35px;
    filter: invert(100%);
  }

  h2 {
    font-family: "Lexend";
    font-size: 20px;
    color: var(--text-primary);
  }
`;

export { Container, Logo };
