import styled, { createGlobalStyle } from "styled-components";

export const Ambient = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: var(--bg-linear);
  position: fixed;
  top: 0;
`;

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

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        width: 100vw;
        height: 100vh;
        background-color: var(--bg);
        /* font-family: 'Lato', sans-serif;
        font-family: 'Oswald', sans-serif;
        font-family: 'Passion One', cursive; */
    }
    
    button {
        cursor: pointer;
    }

    
    h3{
        font-family: "Lexend";
        font-weight: 500;
    }
    :root{
        --bg: #09203F;
        --bg-linear: linear-gradient(to top, #09203f 0%, #537895 100%);
        
        --bg-input-default: rgba(0, 0, 0, 0.1);
        --bg-input-disabled: rgba(0,0,0, 0.5);
        --input-text: #fafafa;
        --input-disabled: #dfdfdf;
        --input-border: rgba(255, 255, 255, 0.4);
        --input-focus-border: rgba(255, 255, 255, 0.7);
        --input-eye: rgba(255, 255, 255, 0.6);

        --text-black: #000000;
        --text-white: #ffffff;
        

    }
`;

export default GlobalStyles;
