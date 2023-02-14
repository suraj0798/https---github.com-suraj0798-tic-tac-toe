import React from 'react'
import { AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import './Startpage.css';

function Startpage() {
  
  return (
    <div className='startPage'>
        <h1 className='selectGame'>Select Game</h1><hr />
        <div>
            <div className='iconSingle'><AiOutlineUser/></div>
            <button className='singlePlayer'>Single Player</button>
        </div>
        <div>
            <div className='iconTeam'><AiOutlineTeam/></div>
            <button className='twoPlayer'>Two Player</button>
        </div>
    </div>
  )
}

export default Startpage