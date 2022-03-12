import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChallengeCard from '../ChallengeCard';


function SingleChallenge() {
  const [challenge, setChallenge] = useState(null);
  let params = useParams();
  console.log(params)
  useEffect(() => {
    fetch(`http://localhost:3001/api/challenges/${params.challengeId}`)
    .then(response => response.json())
    .then(data => setChallenge(data.challenge))
  }, []) 
  return (
    <div>
      <h1>Check out this challenge! Would you like to join? </h1>
      <div>
        {challenge ? <ChallengeCard challenge={challenge} /> : <p>loading</p>} 
      </div>
    </div>
  )
}

export default SingleChallenge