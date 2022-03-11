import React from 'react';

function SignUp() {

  return (
    <div>
      <h1>Sign up to Join a Challengeor to Create your own!</h1>
      <form className="form" id="signup-form">
        <div className="form-group">
          <label htmlFor="signupUsername">username:</label>
          <input className="form-control" type="name" id="signupUsername" />
        </div>
        <div className="form-group">
          <label htmlFor="signupEmail">email:</label>
          <input className="form-control" type="email" id="signupEmail" />
          <div id="emailHelp" className="form-text">We'll never share your email with
            anyone else.</div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="signupPassword">password:</label>
          <input className="form-control" type="password" id="signupPassword" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Signup</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;