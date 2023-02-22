import React from 'react';
import "./Board.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from "react";





const findWinner = (squares) => {
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




function Board({mark}) {

  
const findNextTurn =(squares)=>{
  return squares.filter(Boolean).length % 2 === 0 ? "playerOne" : "playerTwo";
}

  
const [squares, setSquares] = useState (Array(9).fill(null));
// const [playerOneIsNext, setPlayerOneIsNext] = useState(true);
const nextTurn = findNextTurn(squares);
const winner = findWinner(squares);
// const status = currentStatus(winner, squares, nextTurn);

  
const getMark = () =>{
  console.log({mark});
}


const currentStatus = (winner,squares,nextTurn) => {
      return     winner ? `Winner: ${winner}` 
                 : squares.every(Boolean) 
                 ? `Next Player:  ${nextTurn}` 
                 : `Draw: draw` 
}

const selectSquare = (square)=> {
    if (winner || squares[Square]){
      return 
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextTurn 
    setSquares(squaresCopy)
}

const restart =() => {
  setSquares(Array(9).fill(null))
}

const Square = (i) => {
    return <button className='square'onClick={getMark}/*>{props.value}*/>{mark}</button> ;   
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
            <Square value= "1" onClick= {() => onclick("value")}/>
            <Square value= "1" onClick= {() => onclick("value")}/>
            <Square value= "1" onClick= {() => onclick("value")}/>
        </div>
         <div className="board-row">
            <Square value= "1" onClick= {() => onclick("value")}/>
            <Square value= "1" onClick= {() => onclick("value")}/>
            <Square value= "1" onClick= {() => onclick("value")}/>
        </div>
         <div className="board-row">
            <Square value= "1" onClick= {() => onclick("value")}/>
            <Square value= "1" onClick= {() => onclick("value")}/>
            <Square value= "1" onClick= {() => onclick("value")}/>
        </div>
      </div>  
    </div>
  )
}

export default Board