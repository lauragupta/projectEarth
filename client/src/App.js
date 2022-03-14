import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer'
import Challenges from './Components/Pages/Challenges';
import SignUp from './Components/Pages/SignUp';
import LogIn from './Components/Pages/LogIn';
// import About from './Components/Pages/About';
import SingleChallenge from './Components/Pages/SingleChallenge';
import AddChallenge from './Components/Pages/AddChallenge';
import './App.css';
import EditChallenge from './Components/Pages/EditChallenge';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Challenges/>} />
          <Route path="addchallenge" element={<AddChallenge/>} />
          <Route path="challenges/:challengeId" element={<SingleChallenge/>} />
          <Route path="challenges/:challengeId/update" element={<EditChallenge/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="login" element={<LogIn/>} />
          {/* <Route path="about" element={<About/>} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
