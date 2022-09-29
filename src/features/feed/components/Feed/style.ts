import styled from "styled-components";

const Container = styled.div`
  width: 730px;
  height: auto;
  border-left: 1px solid var(--border-feed);
  border-right: 1px solid var(--border-feed);
  margin: 0 20px;
`;
const Header = styled.div`
  width: 100%;
  height: 53px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 15px 10px;
  z-index: 1;

  h2 {
    font-family: "Lexend";
    font-weight: 500;
    font-size: 24px;
    color: var(--text-primary);
  }
`;
export { Container, Header };
