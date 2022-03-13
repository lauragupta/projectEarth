import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditChallenge() {
  let params = useParams();
  const [formTitle, setFormTitle] = useState(null);
  const [formText, setFormText] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/api/challenges/${params.challengeId}`)
    .then(response => response.json())
    .then(data => {
      setFormTitle(data.challenge.challengeTitle)
      setFormText(data.challenge.challengeText)
    })
  }, []) 
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
    fetch(`http://localhost:3001/api/challenges/${params.challengeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const challengeId = data.challenge.id
        navigate(`/challenges/${challengeId}`)
      })
  }
  const form = (  
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="challengeTitle">Title:</label>
        <input className="form-control" type="text" value={formTitle} onChange={handleTitleChange} id="challengeTitle" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="challengeText">Enter your Challenge:</label>
        <textarea className="form-control" type="textera" value={formText} onChange={handleTextChange} id="challengeText" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  )
  return (
    <div>
      <h1>Create your own Challenge!</h1>
      {formTitle && formText ? form : <p>loading</p>}
    </div>
  )
}

export default EditChallenge;