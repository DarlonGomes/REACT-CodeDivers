import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 7vh;
  background-color: rgba(4, 16, 31, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-size: 1.4rem;
    color: var(--text-primary);
  }
`;

export { Container, Logo };
