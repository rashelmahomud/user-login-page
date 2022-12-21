import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compornents/page/Home';
import Login from './compornents/user-login/Login';
import Registation from './compornents/user-login/Registation';
import Reset from './compornents/user-login/Reset';

function App() {
  return (
    <div className="App p-5 bg-blue-50">
      <h className="font-bold text-5xl text-blue-300 " >USER LOGIN</h>


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registation' element={<Registation />}></Route>
        <Route path='/reset' element={<Reset />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
