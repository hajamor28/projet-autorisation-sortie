import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DemandePage from './Pages/DemandePage';
import ListeOfDemandes from './Pages/ListeOfDemandes';
import { PrivateRoute } from './Pages/PrivateRoute';



function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<RegisterPage/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/Profile' element={<PrivateRoute><ProfilePage/></PrivateRoute>} />
        <Route path='/DemandePage' element={<PrivateRoute><DemandePage/></PrivateRoute>}/>
        <Route path='/ListeOfDemands' element={<PrivateRoute><ListeOfDemandes/></PrivateRoute>} />
      </Routes>
    </Router>
  );
  
  
  
}

export default App;