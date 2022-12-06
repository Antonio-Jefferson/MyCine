import ScreenHome from './pages/ScreenHome';
import ScreenSeats from './pages/ScreenSeats';
import ScreenSessions from './pages/ScreenSessions';
import ScreenSuccess from './pages/ScreenSuccess';
import GlobalStyles from './styles/GlobalStyles'
export default function App() {
  return (
    <>
       <GlobalStyles/>
       <ScreenHome/>
       <ScreenSeats/>
       <ScreenSessions/>
       <ScreenSuccess/>
    </>
  
  );
}

