import React from 'react';

function AddChallenge() {

  return (
    <div>
      <h1>Create your own Challenge!</h1>
      <form className="form" id="addChallenge">
        <div className="form-group">
          <label htmlFor="challengeTitle">Title:</label>
          <input className="form-control" type="text" id="challengeTitle" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="challengeText">Enter your Challenge:</label>
          <textarea className="form-control" type="textera" id="challengeText" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddChallenge;