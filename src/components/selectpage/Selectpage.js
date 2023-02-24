import React ,{useState}  from 'react'
import "./Selectpage.css"
import { BiCircle } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

    
function Selectpage({mark,onSubmithandler,cyanbtnHandler,pinkbtnHandler, onRadioChange, color,orangebtnHandler, yellowbtnHandler,
           redbtnHandler, bluebtnHandler, greenbtnHandler, violetbtnHandler }) {
   

    
    

   

  //  const onSubmitMark = () =>{
  //       console.log("this is submit",{mark},{color});
  //  }
    return (
    <div className='selectBox'>
        <Link to = "/startPage"><div className='icon' ><IoMdArrowRoundBack/></div></Link>
        <h3>Select your mark</h3>
        <div className='radiobtn'>
           <input type= "radio" id="crossicon"  value= "X" name='radio' style= {{color: color}}
            checked = {mark === "X"} onChange= {onRadioChange}/>
           <label htmlFor="crossicon" className='radioicon' style= {{color: color}}>X</label>
           <input type= "radio" id="circleicon"  value= "O" name='radio' style= {{color: color}}
            checked = {mark === "O"} onChange= {onRadioChange}/>
           <label htmlFor= "circleicon" className='radioicon' style= {{color: color}}>O</label>
        </div>
        <div className='selectColors'>
            <div className='redbutton' onClick={redbtnHandler}></div>
            <div className='bluebutton'onClick={bluebtnHandler}></div>
            <div className='greenbutton' onClick={greenbtnHandler}></div>
            <div className='violetbutton' onClick={violetbtnHandler}></div>
            <div className='orangebutton' onClick={orangebtnHandler}></div>
            <div className='yellowbutton' onClick={yellowbtnHandler}></div>
            <div className='cyanbutton' onClick={cyanbtnHandler}></div>
            <div className='pinkbutton' onClick={pinkbtnHandler}></div>
        </div>
        <Link to="/board" ><div className='nextbtn' ><button onClick={onSubmithandler}>Start</button></div></Link>
        
    </div> 
  )
}

export default Selectpage