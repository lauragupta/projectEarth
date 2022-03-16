import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from "../../utils/auth"
import {API_ROOT} from '../../constants';


function LogIn(props) {
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [error, setFormError] = useState(false);

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
    setFormError(false);
    fetch(`${API_ROOT}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (!data.token) {
          setFormError(true);
          setFormEmail("");
          setFormPassword("");
          return 
        }
        auth.login(data.token);
        props.setisLoggedIn(true);
        navigate(`/`);
      })
  }

  return (
    <div>
      <h1>Log Back in to Create your own Challenge!</h1>
      <form className="form" onSubmit={handleFormSubmit} id="signup-form">
        <div className="form-group">
          <label htmlFor="logInEmail">email:</label>
          <input className="form-control" type="email" onChange={handleEmailChange} value={formEmail} id="logInEmail" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="logInPassword">password:</label>
          <input className="form-control" type="password" onChange={handlePasswordChange} value={formPassword} id="logInPassword" />
        </div> 
        {error && <div className="form-group">Please enter a valid email and password.</div>}
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;