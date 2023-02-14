import React, { useState } from 'react'
import "./Login.css"
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {

  const navigate = useNavigate();

   const [ user, setUser ] = useState({
    username: '',
    password: ''
  })

  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setUser({
      ...user,
      [name]: value
    })

  }

  const login =() => {
       Axios.post("http://localhost:3001/login" ,user)
    .then((res) => {
      alert(res.data.message)
    }) 
  }

  return (
    <div className="login-box">
      {console.log(user)}
      <h1>Login</h1>
       <Link to={'/'}>
        <div className='icon' ><FaTimes/></div>
      </Link>
      <h4>Please enter your details</h4><hr />

      <form>
        <label>Username</label>
        <input type="text" name='username' value={user.username} placeholder="Type your username here" onChange={onChangeHandler} />
        <label>Password</label>
        <input type="password" name='password' value={user.password} placeholder="Type your password here" onChange={onChangeHandler} />
        <input type="button" value="Login" onClick={login}/>
        <closeform></closeform>
      </form>
    </div>
  )
}

export default Login