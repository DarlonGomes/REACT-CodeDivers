import styled from "styled-components";

const Container = styled.div`
  width: 15vw;
  height: 70vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-y: scroll;
  position: relative;
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

const Option = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  p {
    font-family: "Cabin";
    color: var(--text-primary);
  }
  :hover {
    cursor: pointer;
    background-color: var(--bg-post);
  }
`;
const Title = styled.div`
  height: 100px;
  width: 100%;
  font-size: 20px;
  text-align: center;
  color: var(--text-primary);
  font-family: "Cabin";
  box-sizing: border-box;
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #485669;
`;
export { Container, Option, Title };
