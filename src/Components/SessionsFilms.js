import { Link } from "react-router-dom"
import styled from "styled-components"
export default function SessionsFilms({ weekday, date, showtimes }) {
    return (
        <div>
            <h3>{weekday} - {date}</h3>
            <Buttons >
                {showtimes.map((evet) =>
                    <Link
                        to={`/assentos/${evet.id}`}>
                        <button>
                            {evet.name}
                        </button>
                    </Link>)}
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