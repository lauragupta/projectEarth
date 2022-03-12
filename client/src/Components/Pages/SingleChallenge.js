import React, { useEffect, useState } from 'react';
import ChallengeCard from '../ChallengeCard';

function SingleChallengeCard({challenge}) {

  return (
    <div>
      <h1>Check out this challenge! Would you like to join? </h1>
      <div>
        <ChallengeCard response= {challenge} />
      </div>
    </div>
  )
}

export default SingleChallengeCard