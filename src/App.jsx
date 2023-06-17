import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Learning from './Learning';
import Contact from './Contact';
import Navbar from './Navbar';
import Javscript from './Learning/Javscript';
import CSS from './CSS';
import Html from './HTML';


const App = () => {
  return (
    <>
      <div className="main_div">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/About' element={<About/>}/>
          {/* <Route exact path='/Learning' element={<Learning/>}/> */}
          <Route path="/Learning" element={<Learning />}></Route>
          <Route path="/learning/css" element={<CSS />} />
          <Route path="/learning/javascript" element={<Javscript />} />
          <Route path='/learning/html' element={<Html />}></Route>
          <Route exact path='/Contact' element={<Contact/>}/>
          <Route exact path='*' element={<Home/>}/>
        </Routes>
        </div>
    </>
  );
};

export default App;
