import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 10px;
  border: 1px solid var(--border-feed);
  margin-top: 20px;
  box-sizing: border-box;
  padding: 12px 16px;
  background-color: var(--bg-category);
  h3 {
    font-family: "Lexend";
    font-weight: 500;
    font-size: 20px;
    color: var(--text-primary);
  }
`;

const Content = styled.div`
  width: 100%;
  height: 50px;
  h4 {
    font-family: "Lexend";
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
    :hover {
      text-decoration: 0.5px underline;
      cursor: pointer;
    }
  }
`;

export { Container, Content };
