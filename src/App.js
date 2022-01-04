import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MobileMenu from './components/Navbar/MobileMenu';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar/Navbar';
import Signin from './pages/Signin';


function App() {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  }



  
  return (
    <Router>
      <Navbar toggle={toggle}/>
      <MobileMenu isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="*" element={<Error />}/>
      </Routes>

    </Router>  
  );
}

export default App;
