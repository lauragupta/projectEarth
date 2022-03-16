import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from "../../utils/auth"
import {API_ROOT} from '../../constants';

function SignUp(props) {
  const [formUsername, setFormUsername] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  let navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const inputValue = e.target.value;
    setFormUsername(inputValue);
  }
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
      username: formUsername,
      email: formEmail,
      password: formPassword
    }
    fetch(`${API_ROOT}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        auth.login(data.token);
        props.setisLoggedIn(true);
        navigate(`/`);
      })
  }

  return (
    <div>
      <h1>Sign up to Create a Challenge!</h1>
      <form className="form" onSubmit={handleFormSubmit} id="signup-form">
        <div className="form-group">
          <label htmlFor="signupUsername">username:</label>
          <input className="form-control" placeholder="Your username" type="name" onChange={handleUsernameChange} id="signupUsername" />
        </div>
        <div className="form-group">
          <label htmlFor="signupEmail">email:</label>
          <input className="form-control" type="email" placeholder="Your email" id="signupEmail" onChange={handleEmailChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with
            anyone else.</div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="signupPassword">password:</label>
          <input className="form-control" type="password" placeholder="******" id="signupPassword" onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Signup</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;