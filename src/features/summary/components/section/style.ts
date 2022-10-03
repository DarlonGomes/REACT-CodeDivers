import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-family: "Lexend";
  font-size: 30px;
  font-weight: 600;
  color: var(--text-primary);
`;

const Carousel = styled.div`
  height: 315px;
  gap: 50px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;

export { Container, Carousel, Title };
