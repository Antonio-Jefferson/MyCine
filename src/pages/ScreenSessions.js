import styled from "styled-components"
import SessionsFilms from "../Components/SessionsFilms"

export default function ScreenSessions(){
    return (
        <Conteiner>
            <h2>Selecione o horário</h2>
            <SessionsFilms/>
            <FooterMovie>
                <div>
                    <img src=""/>
                </div>
                <Hour>
                    <p>  Enola Holmes</p>
                    <p></p>
                </Hour>
            </FooterMovie>
        </Conteiner>
        

    )
}

const Conteiner = styled.div`
    padding: 0px 12px;
    h2{
        margin: 45px 0px;
        font-family: 'Roboto';
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
    }
    h3{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #293845;
    }
`
const FooterMovie = styled.footer`
    height: 117px;
    width: 100%;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    right: 0px;
    bottom:0px;

    display: flex;
    align-items: center;
    gap: 22px;
    padding: 0px 10px ;
    div{
        width: 64px;
        height: 89px;
        display: flex;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }
    img{
        margin: auto;
        width: 48px;
        height: 72px;
    }


`

const Hour = styled.span`
    width: 100%;
    background: #DFE6ED;

`