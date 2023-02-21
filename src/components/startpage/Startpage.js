import React from 'react'
import { AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Startpage.css';

function Startpage() {
  
  return (
    <div className='startPage'>
        <h1 className='selectGame'>Select Game</h1><hr />
        <div>
            <div className='iconSingle'><AiOutlineUser/></div>
            <Link to={"/selectpage"}>
            <button className='singlePlayer'>Single Player</button>
            </Link>
        </div>
        <div>
            <div className='iconTeam'><AiOutlineTeam/></div>
            <button className='twoPlayer'>Two Player</button>
        </div>
    </div>
  )
}

export default Startpage