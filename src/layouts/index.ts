import styled from "styled-components";

export const Ambient = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: var(--bg-linear);
  position: relative;
  overflow-x: hidden;
  top: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 74vh;
  display: flex;
`;
