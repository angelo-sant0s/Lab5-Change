import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar/Navbar';
import Signin from './pages/Signin';


function App() {

  
  return (
    <Router>
      <Navbar />
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
