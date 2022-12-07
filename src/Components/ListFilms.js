import styled from "styled-components";
import CardsFilms from "./CardsFilms";
import { useEffect, useState } from "react"
import axios from "axios";

export default function ListFilms(){
    const [urlImg, setUrlImg] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => {
			setUrlImg(resposta.data);
		});
	}, []);

    function SelectMovie(id){
        alert(id)
    }

    return(
        <Ul> 
            {urlImg.map((f)=> <CardsFilms key={f.id} onClick={()=>SelectMovie(f.id)}  img={f.posterURL}/> )}
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