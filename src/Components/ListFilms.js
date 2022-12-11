import styled from "styled-components";
import CardsFilms from "./CardsFilms";
import { useEffect, useState } from "react"
import axios from "axios";
import loading from "../assets/loading.gif"

export default function ListFilms(){
    const [urlImg, setUrlImg] = useState([]);
   
	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => {
			setUrlImg(resposta.data);
           
		});
	}, []);

    if(urlImg.length === 0){
        return <Loading> <img src={loading}/> </Loading>
    }
    return(
        <Ul> 
            {urlImg.map((f)=> <CardsFilms data-test="movie" id={f.id} key={f.id}  img={f.posterURL}/> )}
        </Ul>
    )
}

const Ul = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap; 
`

const Loading = styled.div`
    display: flex;
    justify-content: center;
    img{
        margin: auto;
    }

`