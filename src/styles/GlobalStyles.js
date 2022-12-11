import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        border: none;
        list-style: none;
        font-family: 'Roboto';
        color: #fff;
    }

    :root{
        --black: #000;
        --White: #fff;
        --primary:#292929;
        --TextH3:#E8833A; 
        --colorBtns: #E8833A;
        --success: #2929;
    }
`

export default GlobalStyles;