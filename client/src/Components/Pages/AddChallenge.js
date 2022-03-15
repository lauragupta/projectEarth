import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {API_ROOT} from '../../constants';
import auth from '../../utils/auth';

function AddChallenge() {
  const [formTitle, setFormTitle] = useState("");
  const [formText, setFormText] = useState("");
  let navigate = useNavigate();

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    setFormTitle(inputValue);
  }
  const handleTextChange = (e) => {
    const inputValue = e.target.value;
    setFormText(inputValue);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      challengeTitle: formTitle,
      challengeText: formText,
      
    }
    const token = auth.getToken()
    fetch(`${API_ROOT}/api/challenges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token ? `Bearer ${token}` : '',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const challengeId = data.challenge.id
        navigate(`/challenges/${challengeId}`)
      })
  }

  return (
    <div>
      <h1>Create your own Challenge!</h1>
      <form className="form" onSubmit={handleFormSubmit} id="addChallenge">
        <div className="form-group">
          <label htmlFor="challengeTitle">Title:</label>
          <input className="form-control" type="text" onChange={handleTitleChange} id="challengeTitle" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="challengeText">Enter your Challenge:</label>
          <textarea className="form-control" type="textera" onChange={handleTextChange} id="challengeText" />
        </div>
        <div className="form-group">
          <button className="btn-sm btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddChallenge;