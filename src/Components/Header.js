import styled from "styled-components"
export default function Header() {
    return (
        <Logo>
            CINEFLEX
        </Logo>
    )
}
const Logo = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    text-align: center;
    background-color: var(--black);
    color: #E8833A;
    padding: 33px 0px;
    font-size: 34px;
    font-family: 'Roboto';
    font-weight: 400;

`
