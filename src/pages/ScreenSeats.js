
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
export default function SceenSeats({setTicket}) {
    const { seatsId } = useParams();
    const [Seats, setSeats] = useState([]);
    const [Movie, setMovie] = useState({});
    const [Day, setDay] = useState({});
    const [seatSelected, setSeatSelected] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();
    const [idSeat, setIdSeat] = useState([]);
    const cpfMask = value => {
        return value
          // substitui qualquer caracter que nao seja numero por nada
          .replace(/\D/g, '')
          // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
          .replace(/(-\d{2})\d+?$/, '$1');
      };

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${seatsId}/seats`
        const promisse = axios.get(url)
        promisse.then((e) => {
            setSeats(e.data.seats)
            setMovie(e.data.movie)
            setDay(e.data.day)
        })
        promisse.catch(err => console.log(err))
    }, [])

    // Não gostei do código, muito repetição, não consigo separar e fazer funções pra cada fucionalidade
    function selected(id, i, isA) {
       let arr = []
       let idArr = []
        if(!seatSelected.includes(i)){
            arr = [...seatSelected, i];
            idArr = [...idSeat, id];
            setIdSeat(idArr);
            setSeatSelected(arr);  
        }else{
            const newID = idSeat.filter((e)=> e !== id)
            const newArr = seatSelected.filter((e)=> e !== i)
            setSeatSelected(newArr)
            setIdSeat(newID);

        }
        if (isA === true) {
            alert("Esse assento não está disponível")
            const newID = idSeat.filter((e)=> e !== id)
            const newArr = seatSelected.filter((e)=> e !== i)
            setSeatSelected(newArr)
            setIdSeat(newID);
        }

    }

    function send(event) {
        event.preventDefault();
        const obj = {
            ids:idSeat,
            name: name,
            cpf: cpf
        }
        const ticket = {
            ids:idSeat,
            name: name,
            cpf: cpf,
            day: Day.date,
            title: Movie.title,
            Wekday: Day.weekday
        }
        const link = 'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many'
        const promisse = axios.post(link, obj);
        promisse.then(()=>{
            if(seatSelected.length !== 0){
                navigate('/sucesso');
                setTicket(ticket)
            }else{
                alert("Por favor escolha um Assento")
            }
        })
        promisse.catch((err)=>{
            console.log(err)
        })
    }
   
    return (
        <Conteiner>
            <h2>Selecione o(s) assento(s)</h2>
            <Botoes>
                {Seats.map((e) =>
                    <Btn 
                        data-test="seat"
                        onClick={() => selected(e.name, e.id, e.isAvailable)}
                        className={e.isAvailable ? 'indisponivel' : 'disponivel'}
                        seatSelected={seatSelected}
                        id={e.id}
                    >
                        {e.name}
                    </Btn >
                )}
            </Botoes>
            <Options>
                <div className="circle">
                    <div className="circle-selecionando"></div>
                    <p>Selecionado</p>
                </div>
                <div className="circle">
                    <div className="circle-disponivel"></div>
                    Disponível
                </div>
                <div className="circle">
                    <div className="circle-indisponivel"></div>
                    Indisponível
                </div>
            </ Options>
            <DadosUser onSubmit={(e) => send(e)}>

                <label htmlFor="nome">Nome do comprador:</label>
                <input
                    data-test="client-name"
                    id="nome"
                    type='text'
                    placeholder="Digite seu nome..."
                    required
                    minLength={3}
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                />


                <label htmlFor="number">CPF do comprador:</label>
                <input
                    data-test="client-cpf"
                    id="number"
                    type='namber'
                    placeholder="Digite seu CPF..."
                    required
                    minLength={11}
                    onChange={(e)=> setCpf(cpfMask(e.target.value))}
                    value={cpf}
                />

                <button
                    type="submit"
                    data-test="book-seat-btn"
                >
                    Reservar assento(s)
                </button>
            </DadosUser>
            <Footer movie={Movie} day={Day} />
        </Conteiner>

    )
}

const Conteiner = styled.div`
    padding: 0px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

const Botoes = styled.div`
    width: 327px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 18px 7px;
    margin-bottom: 14px;
    button.indisponivel {
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
    `

const Btn = styled.button`
        background:${(props)=> props.seatSelected.includes((props.id))? '#1AAE9E' : "#C3CFD9"};
        width: 26px;
        height: 26px;
        border-radius: 50%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #000000;
`
const Options = styled.div`
        display: flex;
        gap: 20px;
        .circle{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 13px;
        }
        .circle-selecionando{  
            width: 25px;
            height: 25px;
          
            background: #1AAE9E;
            border: 1px solid #0E7D71;
            border-radius: 50%;
        }
        .circle-disponivel{
            width: 24px;
            height: 24px;

            background: #C3CFD9;
            border: 1px solid #7B8B99;
            border-radius: 50%;
        }

        .circle-indisponivel{
            width: 24px;
            height: 24px;

            background: #FBE192;
            border: 1px solid #F7C52B;
            border-radius: 17px;
        }
    
    `
const DadosUser = styled.form`
        display: flex;
        flex-direction: column;
        margin-top: 42px;
        label{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 18px;
            margin-top: 7px;
        }
        input{
            width: 327px;
            height: 51px;
        
            border: 1px solid #D5D5D5;
            border-radius: 3px;
            padding: 0px 12px;
            color: #000;
        }
        button{
            width: 225px;
            height: 42px;
            margin: 57px auto 0px auto;

            background: #E8833A;
            border-radius: 3px;
            color: #fff;
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 13px;
        }
    
    
    `