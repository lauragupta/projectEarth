import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Challenges from './Components/Pages/Challenges';
import SignUp from './Components/Pages/SignUp';
import LogIn from './Components/Pages/LogIn';
import About from './Components/Pages/About';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Challenges />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
