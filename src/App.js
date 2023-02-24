import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/Signup';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import {Routes,Route} from 'react-router-dom';
import Startpage from './components/startpage/Startpage';
import { useState } from 'react';
import  Selectpage  from "./components/selectpage/Selectpage";
import Board  from "./components/board/Board";

function App() {
  const [user, setUser] = useState({})
  // const getMark = (data) => {
  //     console.log("this is on submit",data)
  // }
  const [mark, setMark] = useState("");
  const [color, setColor] = useState("black");

    let red = "#ff0000";
       let blue = "#0000ff";
       let green = "#008000";
       let violet = "#8f00ff";
       let orange = "#ff5800";
       let yellow = "#ffea00";
       let cyan = "#00b7eb";
       let pink = "#ff007f";

  const redbtnHandler= () => {setColor(red)};
    const bluebtnHandler= () => {setColor(blue)};
    const greenbtnHandler= () => {setColor(green)};
    const violetbtnHandler= () => {setColor(violet)};
    const orangebtnHandler= () => {setColor(orange)} ;
    const yellowbtnHandler= () => {setColor(yellow)};
    const cyanbtnHandler= () => {setColor(cyan)} ;
    const pinkbtnHandler= () => {setColor(pink)};

   const onRadioChange = (event) =>{
       setMark(event.target.value);
       console.log("this is radiobtn",{mark},{color});
   }

   const onSubmithandler = (event) =>{
      setMark(event.target.value);
      setColor(event.target.value);
      console.log("this is onsubmit",{mark},{color});
   }
  
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>    
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={
            user ? <Login/> : <Login setUser = {setUser}/>
          }></Route>
          <Route path="/startPage" element={<Startpage/>}></Route>
          <Route path="/selectpage" element={<Selectpage mark={mark} color= {color}
          onSubmithandler= {onSubmithandler}
           cyanbtnHandler= {cyanbtnHandler} pinkbtnHandler= {pinkbtnHandler}
           bluebtnHandler={bluebtnHandler} greenbtnHandler={greenbtnHandler} violetbtnHandler={violetbtnHandler}
           orangebtnHandler= {orangebtnHandler} yellowbtnHandler={yellowbtnHandler} 
           redbtnHandler={redbtnHandler} onRadioChange={onRadioChange}/>}></Route>
          <Route path='/board' element={<Board getmark={mark} getcolor={color} onSubmithandler= {onSubmithandler}/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
