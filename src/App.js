import Header from './Components/Header'
import GlobalStyles from "./styles/GlobalStyles"
import styled from 'styled-components';
import ScreenSessions from './pages/ScreenSessions';
/*import ScreenSeats from './pages/ScreenSeats';
import ScreenHome from './pages/ScreenHome';
import ScreenSuccess from './pages/ScreenSuccess';*/
export default function App() {
  return (
    <Conteiner>
       <GlobalStyles/>
       <Header/>
       <ScreenSessions/>
       {/*
       <ScreenHome/>
        <ScreenSeats/>
       
  <ScreenSuccess/>*/}
    </Conteiner>
  
  );
}

const Conteiner = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
`