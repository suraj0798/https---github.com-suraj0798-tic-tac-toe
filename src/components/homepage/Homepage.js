import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'

function Homepage() {

    
  return (
    <div className='homePage'>
        <header className='homePageHeader'> TIC<br/> TAC<br/> TOE</header>
        <Link to="/login">
          <button className='logInbtn'>Log In</button><br />
        </Link>
        <Link to= "/signup">
          <button className='signupbtn'>Sign Up</button>
        </Link>

    </div>
  )
}

export default Homepage