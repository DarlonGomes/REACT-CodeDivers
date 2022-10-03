import styled from "styled-components";

const Container = styled.div`
  width: 40vw;
  height: 100%;
  box-sizing: border-box;
  background-color: var(--bg-statement);
  position: relative;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-statement);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--bg-scrollbar);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const Title = styled.h3`
  font-size: 1.8rem;
  color: var(--text-primary);
  font-family: "Cabin";
  margin-bottom: 40px;
  position: sticky;
  top: 0;
  padding: 24px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-family: "Cabin";
  margin-bottom: 30px;
  text-align: justify;
  padding: 0 24px;
`;
export { Container, Title, Description };
