import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import About from "./About";
import './App.css';
import ContactUs from "./ContactUs";

function App() {
  return(
  <Router>
    <nav>
    <Link to='/' className="link">Home</Link>
      <Link to='/about' className="link">About</Link>
      <Link to='/team' className="link">Team</Link>
      <Link to='/contactus' className="link">Contact us</Link>
    </nav>

  <Routes>
  <Route path='/' element ={<Home />}/>
    <Route path='/about' element ={<About />}/>
    <Route path='/team' element ={<Team />}/>
    <Route path='/contactus' element ={<ContactUs />}/>
  </Routes>

  </Router>
  ); 
}

export default App;