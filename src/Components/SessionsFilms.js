import { Link } from "react-router-dom"
import styled from "styled-components"
export default function SessionsFilms({ weekday, date, showtimes, key }) {
    return (
        <div key={key} data-test="movie-day">
            <h3>{weekday} - {date}</h3>
            <Buttons >
                {showtimes.map((evet, id) =>
                    <Link
                        to={`/assentos/${evet.id}`}>
                        <button key={id} data-test="showtime">
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