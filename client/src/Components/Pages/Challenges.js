import React, { useEffect, useState } from 'react';
import ChallengeCard from '../ChallengeCard';


function Challenges() {
  // const [challenges, setChallenges] = useState(null);
  // useEffect(() => {
  //   fetch('http://localhost:3001/api/challenges')
  //   .then(response => response.json())
  //   .then(data => setChallenges(data))
  // }, []) 

  return (
    <div>
      <h1>Check out these Challenges! What can you do?</h1>
      {/* {challenges ? challenges.map((challenge) => <ChallengeCard challenge={challenge} key={challenge.id} />) : <p>loading</p>}  */}
    </div>
  )
}

export default Challenges;