import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Signup from './components/Signup';
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="App">
      {/* <Link to={'/home'}> home</Link>
        <Link to={'/login'}>go to login</Link>
        <Link to={'/Register'}>go to Register </Link> */}
        <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element = { <Home/>}/>
          <Route path='/about' element = { <About/>}/>
          <Route path='/signup' element = { <Signup/>}/>
          
          


         
        </Routes>


        </BrowserRouter>
        
      
    </div>
  );
}

export default App;