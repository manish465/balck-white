import { createGlobalStyle } from "styled-components";

import CoustomFont from "../assets/font/RobotoMono-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:Roboto Mono ;
        src: url(${CoustomFont});
    }
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
        background-color: #000;
        color: #fff;
        width:100%;
    }
`;
