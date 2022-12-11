import { useNavigate } from "react-router-dom"
import styled from "styled-components"
export default function ScreenSuccess({ ticket, setTicket }) {
    const navigate = useNavigate();
    function home(){
        navigate('/')
        setTicket({})
    }
    return (
        <Conteiner>
            <h2>PEDIDO FEITO <br /> COM SUCESSO!</h2>
            <Body>
                <section data-test="movie-info">
                    <h3>Filme e sessão</h3>
                    <p>{ticket.title}</p>
                    <p>{ticket.Wekday} - {ticket.day}</p>
                </section>
                <section data-test="seats-info" >
                    <h3>Ingressos</h3>
                    {ticket.ids.map((e) => <p key={e}>Assento {e}</p>)}
                </section>
                <section data-test="client-info">
                    <h3>Comprador</h3>
                    <p>{`Nome:${ticket.name}`}</p>
                    <p>{`CPF:${ticket.cpf}`}</p>
                </section>
            </Body>

            <Enviar
                data-test="go-home-btn"
                onClick={home}
            >
                Voltar para Home
            </Enviar>

        </Conteiner>
    )
}
const Conteiner = styled.div`
    padding: 0px 12px;
    h2{
        margin: 45px 0px;
        font-family: 'Roboto';
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: var(--success);
    }
`
const Body = styled.section`   
    padding-left: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    font-size: 22px; 
    font-weight: 400;
    h3 {
        font-size: 24px;
        font-weight: 700;
        color: var(--TextH3);
        margin-bottom: 10px;
        margin-top: 50px;
    }
`

const Enviar = styled.button`
    width: 225px;
    height: 42px;
    margin-top: 57px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    margin-left: calc(50vw - 225px/2);
    text-decoration: none;
`

