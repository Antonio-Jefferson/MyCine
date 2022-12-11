
import ListFilms from "../Components/ListFilms"
import styled from 'styled-components'
export default function ScreenHome({setIdSection, idSection}){
    return (
        <Conteiner>
             <h2>Selecione o filme</h2>
             <ListFilms setIdSection={setIdSection} idSection={idSection}/>
        </Conteiner>
       
    )
}

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 12px;
    h2{
        margin: 45px 0px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: var(--White);
    }
`

