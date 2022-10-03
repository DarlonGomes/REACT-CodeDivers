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
        --bg-category: rgba(0, 0, 0, 0.05);
        --bg-input-default: rgba(0, 0, 0, 0.1);
        --bg-input-disabled: rgba(0,0,0, 0.5);
        --bg-button-unselected: rgba(0, 34, 64, 0.2);
        --bg-button-selected: #002240;
        --bg-code-nav: #002240;
        --bg-statement: rgba(0, 0, 0, 0.5);
        --bg-scrollbar: rgba(255, 255, 255, 0.3)
;
        --input-text: #fafafa;
        --input-disabled: #dfdfdf;
        --input-border: rgba(255, 255, 255, 0.4);
        --input-focus-border: rgba(255, 255, 255, 0.5);
        --input-eye: rgba(255, 255, 255, 0.6);

        --text-black: #000000;
        --text-white: #ffffff;
        --text-post-info: #C1CAD1;
        --text-primary: #e7e9ea;
        --text-secondary: #99ABB6;
        --text-unselected: rgba(231, 233, 234, 0.2);
        

        --border-feed: rgba(255, 255, 255, 0.1);
        --border-editor: rgba(255, 255, 255, 0.3);
        --border-user: rgba(255, 255, 255, 0.5);
    }
`;

export default GlobalStyles;
