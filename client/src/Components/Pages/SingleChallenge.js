import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import ChallengeCard from '../ChallengeCard';


function SingleChallenge() {
  const [challenge, setChallenge] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/challenges/${params.challengeId}`)
    .then(response => response.json())
    .then(data => setChallenge(data.challenge))
  }, []) 

  let navigate = useNavigate();

  function onClick(e) {
    //make the api call to delete the challenge
    fetch(`http://localhost:3001/api/challenges/${params.challengeId}`, {
      method: 'DELETE'
    })
    //re-route to the challenge page
    .then( () => navigate('/'))
  }

  return (
    <div>
      <h1>Check out this challenge! Would you like to join? </h1>
      <div>
        {challenge ? 
          <>
            <ChallengeCard challenge={challenge} />  
            <Link to={`/challenges/${challenge.id}/update`}>Edit Challenge</Link>
            <button className="btn-sm btn-primary" type="button" onClick={onClick}>Delete Challenge</button> 
          </>
          : <p>loading</p>} 
      </div>
    </div>
  )
}

export default SingleChallenge