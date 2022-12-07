import styled from "styled-components"
export default function SessionsFilms() {
    return (
        <div>
            <h3>Quinta-feira - 24/06/2021</h3>
            <Buttons >
                <button>15:00</button>
                <button>19:00</button>
            </Buttons >
        </div>

    )
}

const Buttons = styled.div`
    display: flex;
    gap: 10px;
    button{
        width: 82px;
        height: 43px;
        margin: 22px 0px;
        background-color: var( --colorBtns);
        border-radius: 3px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #fff;
    }
`