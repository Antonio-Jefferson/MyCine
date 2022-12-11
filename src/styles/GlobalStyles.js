import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        border: none;
        list-style: none;
        font-family: 'Roboto';
        color: #293845;
    }

    :root{
        --black: #c3cfd9;
        --footer: #dfe6ed;

        --White: ##293845;
        --primary:##e5e5e5;
        --TextH3:#293845; 
        --colorBtns: #E8833A;
        --success: #247a6b;
    }
`

export default GlobalStyles;