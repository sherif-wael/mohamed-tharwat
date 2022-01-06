import {createGlobalStyle} from "styled-components";
import transitions from "./transitions";
import media from "./media";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        // font-family: 'Markazi Text', serif;
        // font-family: 'Tajawal', sans-serif;
        font-family: "Times New Roman", Times, serif;
        line-height: 1.3;
    }
    ${transitions};
`

export default GlobalStyles;