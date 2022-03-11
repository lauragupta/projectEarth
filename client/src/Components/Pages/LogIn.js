import React from 'react';

function LogIn() {

  return (
    <div>
      <h1>Log Back in to see your Challenges or to Create your own!</h1>
      <form className="form" id="signup-form">
        <div className="form-group">
          <label htmlFor="logInEmail">email:</label>
          <input className="form-control" type="email" id="logInEmail" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="logInPassword">password:</label>
          <input className="form-control" type="password" id="logInPassword" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;