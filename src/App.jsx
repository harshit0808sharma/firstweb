import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Learning from './Learning';
import Contact from './Contact';
import Navbar from './Navbar';
import Javascript from './Learning/Javascript';
import CSS from './Learning/CSS';
import Html from './Learning/HTML';


const App = () => {
  return (
    <>
      <div className="main_div">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/About' element={<About/>}/>
          <Route exact path="/Learning" element={<Learning />}/>
          <Route exact path="/learning/css" element={<CSS />} />
          <Route exact path="/learning/javascript" element={<Javascript />}/>
          <Route exact path='/learning/html' element={<Html />}/>
          <Route exact path='/Contact' element={<Contact/>}/>
          <Route exact path='*' element={<Home/>}/>
        </Routes>
        </div>
    </>
  );
};

export default App;
