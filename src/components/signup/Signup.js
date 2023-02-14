import React,{ useState } from 'react'
import './Signup.css'
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";

function Signup() {

  const navigate = useNavigate();

  const [ user, setUser ] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const signup = () =>{
     const {name, username, email, password, confirmPassword} = user
     if(name && username && email && password && password===confirmPassword) {
        Axios.post("http://localhost:3001/signup", user)
        .then(res => {
          alert(res.data.message)
          navigate("/")
        })
     } else {
      alert("Please enter valid inputs")
      navigate("/signup")
     }
     
  }

  return (
    <div className="signup-box">
      {console.log("User",user)}
      <h1>Sign Up</h1>
      <Link to={'/'}>
        <div className='icon' ><FaTimes/></div>
      </Link>
      <h4>To unleash the gamer within you!</h4><hr />
      
      
      <form>
        <label>Your Name</label>
        <input type="text" name='name' value={user.name} placeholder="Type your your name here" onChange={onChangeHandler} />
        <label>Username</label>
        <input type="text" name='username' value={user.username} placeholder="Type your username here" onChange={onChangeHandler}/>
        <label>Email</label>
        <input type="email" name='email' value={user.email} placeholder="Type your email here" onChange={onChangeHandler}/>
        <label>Password</label>
        <input type="password" name='password' value={user.password} placeholder="Type your password here" onChange={onChangeHandler}/>
        <label>Confirm Password</label>
        <input type="password" name='confirmPassword' value={user.confirmPassword} placeholder="Confirm your password" onChange={onChangeHandler}/>
        <input type="button" onClick={signup} value="Sign Up" />
        <closeform></closeform>
      </form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p>
    </div>
  )
}

export default Signup