import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer'
import Challenges from './Components/Pages/Challenges';
import SignUp from './Components/Pages/SignUp';
import LogIn from './Components/Pages/LogIn';
// import About from './Components/Pages/About';
import SingleChallenge from './Components/Pages/SingleChallenge';
import AddChallenge from './Components/Pages/AddChallenge';
import './App.scss';
import EditChallenge from './Components/Pages/EditChallenge';
import auth from './utils/auth';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedIn = auth.isLoggedIn();
    setIsLoggedIn(isLoggedIn);
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setisLoggedIn={setIsLoggedIn}/>
        <Hero />
        <div className="container page-container">
          <Routes>
            <Route path="/" element={<Challenges/>} />
            <Route path="addchallenge" element={<AddChallenge/>} />
            <Route path="challenges/:challengeId" element={<SingleChallenge/>} />
            <Route path="challenges/:challengeId/update" element={<EditChallenge/>} />
            <Route path="signup" element={<SignUp isLoggedIn={isLoggedIn} setisLoggedIn={setIsLoggedIn}/>} />
            <Route path="login" element={<LogIn isLoggedIn={isLoggedIn} setisLoggedIn={setIsLoggedIn}/>} />
            {/* <Route path="about" element={<About/>} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
