import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/Signup';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom';
import Startpage from './components/startpage/Startpage';
import { useState } from 'react';
import  Selectpage  from "./components/selectpage/Selectpage";

function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>    
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={
            user ? <Login/> : <Login setUser = {setUser}/>
          }></Route>
          <Route path="/startPage" element={<Startpage/>}></Route>
          <Route path="/selectpage" element={<Selectpage/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
