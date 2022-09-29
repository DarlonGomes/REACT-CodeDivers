import styled from "styled-components";

export const Ambient = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: var(--bg-linear);
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;
