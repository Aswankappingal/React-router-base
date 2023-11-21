import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Body/Contact/Contact'
import Home from './Components/Body/Home/Home'
import About from './Components/Body/About/About'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/About" Component={About}/>


    </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
