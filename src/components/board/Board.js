import React from 'react';
import "./Board.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from "react";

// ********start*******

const playerTwo = () => {}



const intialHistory = [{
  squares: Array(9).fill(null),
}];

const intialState = {
  history: intialHistory,
  playerIsNext: true,
  stepNumber: 0,
  player: null,
  winner: null,
}

// const gameInfo = () => {
//   const {
//     player,
//     playerIsNext,
//     history,
//     winner,
//     onClick,
//     stepNumber,
//   } 
// }

const status = () => {
  if (winner) {
    status = 'Winner is ' + winner;}
  // }else if (player) {
  //   const opponent = (player === "X") ? "O" : "X";
  //   status = 'Next Player is ' + (playerIsNext ? player : opponent);
  // }
}

 



const winner = (squares) => {
     const lines = [
      [0,1,2],[3,4,5],[6,7,8],[0,3,6],
      [1,4,7],[2,5,8],[0,4,8],[2,4,6]
     ];
     for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a]=== squares[b] && squares[a]=== squares[c]) {
        return squares[a];
        }
      }
      return null;
}




function Board({getmark,getcolor, onSubmithandler}) {

const xSide = {getmark === "X"};
const itsmark = () => {
  return{getmark};
}
// const restart =() => {
//   setSquares(Array(9).fill(null))
// }
const Square = () => {
    return <button className='square' onClick= {itsmark}></button> ;   
}


  return (

    
    <div className='boardbox'>
       <Link to = "/selectpage"><div className='icon' ><IoMdArrowRoundBack/></div></Link>
       <div className='playerinfo'>
          <div className='playerOne'>player1</div>
          <div className='playerTwo'>player2</div>
       </div>
      <div className='container'>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
         <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
         <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
      </div>  
    </div>
  )
}

export default Board