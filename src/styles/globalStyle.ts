import { createGlobalStyle } from "styled-components";

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
        --bg-post: rgba(255, 255, 255, 0.2);
        --bg-input-default: rgba(0, 0, 0, 0.1);
        --bg-input-disabled: rgba(0,0,0, 0.5);
        --input-text: #fafafa;
        --input-disabled: #dfdfdf;
        --input-border: rgba(255, 255, 255, 0.4);
        --input-focus-border: rgba(255, 255, 255, 0.7);
        --input-eye: rgba(255, 255, 255, 0.6);

        --text-black: #000000;
        --text-white: #ffffff;
        --text-post-info: #C1CAD1;
        --text-primary: #e7e9ea;

        --border-feed: rgba(255, 255, 255, 0.1);
    }
`;

export default GlobalStyles;
