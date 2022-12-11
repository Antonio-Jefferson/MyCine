import Header from './Components/Header'
import GlobalStyles from "./styles/GlobalStyles"
import styled from 'styled-components';
import ScreenSessions from './pages/ScreenSessions';
import ScreenSeats from './pages/ScreenSeats';
import ScreenHome from './pages/ScreenHome';
import ScreenSuccess from './pages/ScreenSuccess';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  const [ticket, setTicket] = useState({})
  return (
    <Conteiner>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ScreenHome />}></Route>
          <Route path='/sessoes/:sessoesId' element={<ScreenSessions />}></Route>
          <Route path='/assentos/:seatsId' element={<ScreenSeats setTicket={setTicket} />}></Route>
          <Route path='/sucesso' element={<ScreenSuccess ticket={ticket} />}></Route>
        </Routes>
      </BrowserRouter>
    </Conteiner>

  );
}

const Conteiner = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
`