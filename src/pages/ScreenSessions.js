import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import SessionsFilms from "../Components/SessionsFilms"

export default function ScreenSessions(){
    const [movie, setMovie] = useState({})
    const [daysMovie, setDaysMovie] = useState([])
    const {sessoesId} = useParams();
   
    useEffect(()=>{
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${sessoesId}/showtimes`
        const promise = axios.get(url)
        promise.then(res =>{
            setMovie(res.data)
            setDaysMovie(res.data.days)
        })
        promise.catch((res)=>{
            console.log(res.data)
        
        })
    },[])
    return (
        <Conteiner>
            <h2>Selecione o horário</h2>
           {daysMovie.map((e, id) => <SessionsFilms key={id}  weekday={e.weekday} date={e.date} showtimes={e.showtimes}/>)}
            <FooterMovie data-test="footer">
                <div>
                    <img src={movie.posterURL}/>
                </div>
                <Hour>
                    <p>{movie.title}</p>
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
        color: var(--White);
    }
    h3{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: var(--White);
    }
`
const FooterMovie = styled.footer`
    height: 117px;
    width: 100%;
    background: var(--black);
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
`