import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>This is home</h1>
       <Link to='/contact'><button>Contact</button></Link>
       <Link to='/about'><button>About</button></Link>       

      
    </div>
  )
}

export default Home
