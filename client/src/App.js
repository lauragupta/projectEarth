import React, { useState } from 'react';
import Header from './Components/Header';
import Challenges from './Components/Pages/Challenges';
import SignUp from './Components/Pages/SignUp';
import LogIn from './Components/Pages/LogIn';
import About from './Components/Pages/About';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('Challenges');

  const renderPage = () => {
    if (currentPage === 'Challenges') {
      return <Challenges />;
    }
    if (currentPage === 'SignUp') {
      return <SignUp />;
    }
    if (currentPage === 'LogIn') {
      return <LogIn />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* {renderPage()} */}
    </div>
  );
}

export default App;
