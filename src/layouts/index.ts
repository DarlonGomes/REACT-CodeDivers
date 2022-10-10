import styled from "styled-components";

export const Ambient = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: var(--bg-linear);
  position: relative;
  top: 0;
  overflow-x: hidden;
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

export const ContentWrapperDinamic = styled.div`
  height: 97vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
`;
