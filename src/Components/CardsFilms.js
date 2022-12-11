
import styled from "styled-components"
import { Link } from "react-router-dom"
export default function CardsFilms({ img, key, id }) {
    return (
        <Link key={key} to={`/sessoes/${id}`}>
            <Cards data-test="movie" > <img src={img} /> </Cards>
        </Link>
    )

}


const Cards = styled.li`
    display: flex;
    background-color: #fff;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;
    img{
        width: 129px;
        height: 193px;
        margin: auto;
    }

`


