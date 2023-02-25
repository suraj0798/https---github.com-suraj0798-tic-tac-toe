import React  from 'react'
import "./Selectpage.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

    
function Selectpage({mark,onSubmithandler,onRadioChange }) {
   
    return (
    <div className='selectBox'>
        <h3>Select your mark</h3>
        <div className='radiobtn'>
           <input type= "radio" id="crossicon"  value= "X" name='radio'
            checked = {mark === "X"} onChange= {onRadioChange}/>
           <label htmlFor="crossicon" className='radioicon'>X</label>
           <input type= "radio" id="circleicon"  value= "O" name='radio'
            checked = {mark === "O"} onChange= {onRadioChange}/>
           <label htmlFor= "circleicon" className='radioicon'>O</label>
        </div>
      
        <Link to="/board" ><div className='nextbtn' ><button onSubmit={onSubmithandler}>Start</button></div></Link>
        
    </div> 
  )
}

export default Selectpage