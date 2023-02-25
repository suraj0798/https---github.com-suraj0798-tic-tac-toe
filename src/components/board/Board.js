import React from 'react';
import "./Board.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { render } from '@testing-library/react';

// ********start*******  

const calculateWinner = (squares) => {
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


function Board({mark, user,onSubmithandler}) {
  const [nextPlayer, setNextPlayer] = useState(true);
  const [value, setValue] = useState();
  const [nextMark, setNextMark] = useState();
  const [squares, setSquares] = useState (Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  }
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (nextPlayer) {
      nextSquares[i] = mark;
    }else {
      if (mark === markType.xMark) {
        nextSquares[i] = markType.oMark; 
      }else {
        nextSquares[i] = markType.xMark;
      }
      
    }

    setSquares(nextSquares);
    setNextPlayer(!nextPlayer);
    console.log({mark});
  }



const Square = ({ onSquareClick,value}) => {
    return <button className='square' onClick={onSquareClick}>{value}</button> ;   
}
 
  const markType = {
    xMark : "X",
    oMark : "O"
  }

  const secondMark=(markType) => {
    if (mark === markType.xMark) {
       return markType.oMark;
    }else if (mark === markType.oMark) {
      return markType.xMark;
    }else{
      return null;
    }
  }

  return (

    
    <div className='boardbox'>
       <Link to = "/selectpage"><div className='icon' ><IoMdArrowRoundBack/></div></Link>
       <div className='playerinfo'>
          <div className='playerOne'>Player One <div className='playerOneMark'>{mark}</div></div>
          <div className='playerTwo'>Player Two <div className='playerTwoMark'>{secondMark(markType)}</div> </div>
       </div>
       <div className='status'>{status}</div>
      <div className='container'>
        <div className="board-row">
            <Square  value = {squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square  value = {squares[1]} onSquareClick={() =>handleClick(1)}/>
            <Square  value = {squares[2]} onSquareClick={() =>handleClick(2)}/>
        </div>
         <div className="board-row">
            <Square value = {squares[3]} onSquareClick={() =>handleClick(3)}/>
            <Square value = {squares[4]} onSquareClick={() =>handleClick(4)}/>
            <Square value = {squares[5]} onSquareClick={() =>handleClick(5)}/>
        </div>
         <div className="board-row">
            <Square value = {squares[6]} onSquareClick={() =>handleClick(6)}/> 
            <Square value = {squares[7]} onSquareClick={() =>handleClick(7)}/>
            <Square value = {squares[8]} onSquareClick={() =>handleClick(8)}/>
        </div>
      </div>  
    </div>
  )
}

export default Board