import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    :root {
        --f7-theme-color: #f00;
        --f7-theme-color-shade: #d60000;
        --f7-theme-color-tint: #ff2929;
        --f7-theme-color-rgb: 255, 0, 0;
    }
    
`;
