import {createGlobalStyle} from "styled-component"

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        border: none;
        list-style: none;
    }

    :root{
        --primary: #E5E5E5;
        --seatsBtns: #C3CFD9;
        --borderSeatsBtns: #808F9D;
        --colorBtns: #E8833A;
        --selected: #1AAE9E;
        --borderSelected: #0E7D71;
        --available: #C3CFD9;
        --borderAvailable: #7B8B99;
        --unavailable: #FBE192;
        --borderUnavaible: #F7C52B;
    }
`

export default GlobalStyles;