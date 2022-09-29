import styled from "styled-components";

export const Banner = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px 20px 0 0;
  box-sizing: border-box;
  img {
    width: 40px;
    height: 40px;
    object-fit: fill;
    filter: invert(100%);
    margin-bottom: 20px;
  }
  h3 {
    font-family: "Lexend";
    font-weight: 500;
    font-size: 24px;
    color: var(--text-white);
    margin-bottom: 10px;
  }
  p {
    font-family: "Lexend";
    font-weight: 400;
    font-size: 16px;
    color: var(--text-white);
    margin-bottom: 5px;
  }
`;

export const HomeContent = styled.div`
  position: relative;
  width: 700px;
  margin: 250px auto 0;
  animation: diving 2000ms;

  @keyframes diving {
    0% {
      top: -900px;
    }
    50% {
      top: 40px;
    }
    100% {
      top: 0px;
    }
  }
`;
