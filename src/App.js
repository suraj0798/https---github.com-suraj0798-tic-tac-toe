import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/Signup';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import  Selectpage  from "./components/selectpage/Selectpage";
import Board  from "./components/board/Board";

function App() {
  const [user, setUser] = useState({})
  const [mark, setMark] = useState("");

  const onRadioChange = (event) =>{
       setMark(event.target.value);
       console.log("this is radiobtn",{mark});
   }

  const onSubmithandler = (event) =>{
    event.preventDefault();
      setMark(event.target.value);
   }
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>    
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={
            user ? <Login/> : <Login setUser = {setUser}/>
          }></Route>
          <Route path="/selectpage" element={<Selectpage mark={mark}
          onSubmithandler= {onSubmithandler} onRadioChange={onRadioChange}/>}></Route>
          <Route path='/board' element={<Board mark={mark} onSubmithandler= {onSubmithandler}/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
