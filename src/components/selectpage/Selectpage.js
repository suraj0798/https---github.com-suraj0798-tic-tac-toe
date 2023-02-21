import React ,{useState}  from 'react'
import "./Selectpage.css"
import { BiCircle } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function Selectpage() {
       let red = "#ff0000";
       let blue = "#0000ff";
       let green = "#008000";
       let violet = "#8f00ff";
       let orange = "#ff5800";
       let yellow = "#ffea00";
       let cyan = "#00b7eb";
       let pink = "#ff007f";

    const [color, setColor] = useState("black");
    const redbtnHandler= () => {setColor(red)};
    const bluebtnHandler= () => {setColor(blue)};
    const greenbtnHandler= () => {setColor(green)};
    const violetbtnHandler= () => {setColor(violet)};
    const orangebtnHandler= () => {setColor(orange)} ;
    const yellowbtnHandler= () => {setColor(yellow)};
    const cyanbtnHandler= () => {setColor(cyan)} ;
    const pinkbtnHandler= () => {setColor(pink)};

    


  return (
    <div className='selectBox'>
        <Link to = "/startPage"><div className='icon' ><IoMdArrowRoundBack/></div></Link>
        <h3>Select your mark</h3>
        <div className='radiobtn'>
           <input type= "radio" id="crossicon"  value= "X" name='radio'/>
           <label htmlFor="crossicon" style= {{color: color}}>X</label>
           <input type= "radio" id="circleicon"  value= "O" name='radio'/>
           <label htmlFor= "circleicon" style= {{color: color}}>O</label>
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
        <div className='nextbtn'><button>Next</button></div>
    </div>
  )
}

export default Selectpage