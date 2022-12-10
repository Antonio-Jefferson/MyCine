import Header from './Components/Header'
import GlobalStyles from "./styles/GlobalStyles"
import styled from 'styled-components';
import ScreenSessions from './pages/ScreenSessions';
import ScreenSeats from './pages/ScreenSeats';
import ScreenHome from './pages/ScreenHome';
import ScreenSuccess from './pages/ScreenSuccess';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Conteiner>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ScreenHome />}></Route>
          <Route path='/sessoes/:sessoesId' element={<ScreenSessions />}></Route>
          <Route path='/assentos/:seatsId' element={<ScreenSeats />}></Route>
          <Route path='/sucesso' element={<ScreenSuccess />}></Route>
        </Routes>
      </BrowserRouter>
    </Conteiner>

  );
}

const Conteiner = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
`