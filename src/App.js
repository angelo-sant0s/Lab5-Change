import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MobileMenu from './components/Navbar_components/MobileMenu';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar_components/Navbar';
import Login from './pages/Login';
import {signup} from './firebase-config';
import Profile from './pages/Profile';
import News from './pages/News';


function App() {

  /* Menu Mobile */
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setisOpen(false);
      }
    }
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })


  
  return (
      <Router>
        <Navbar toggle={toggle}/>
        <MobileMenu isOpen={isOpen} toggle={toggle}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Login" element={<Login signup={signup} />}/>
          <Route path="*" element={<Error />}/>
          <Route path="/Profile/:userid" element={<Profile />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </Router> 
  );
}

export default App;
