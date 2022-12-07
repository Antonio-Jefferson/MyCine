
import styled from "styled-components"

export default function CardsFilms({img, onClick, key}) {
   
    return (
        <Cards onClick={onClick} key={key} ><img src={img} /></Cards>
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


