import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from "../../utils/auth"


function LogIn() {
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setFormEmail(inputValue);
  }
  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setFormPassword(inputValue);
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: formEmail,
      password: formPassword
    }
    fetch(`http://localhost:3001/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        auth.login(data.token)
        navigate(`/`)
      })
  }

  return (
    <div>
      <h1>Log Back in to see your Challenges or to Create your own!</h1>
      <form className="form" onSubmit={handleFormSubmit} id="signup-form">
        <div className="form-group">
          <label htmlFor="logInEmail">email:</label>
          <input className="form-control" type="email" onChange={handleEmailChange} id="logInEmail" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="logInPassword">password:</label>
          <input className="form-control" type="password" onChange={handlePasswordChange} id="logInPassword" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;