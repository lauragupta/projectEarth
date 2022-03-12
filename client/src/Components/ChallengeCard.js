import React from 'react';


function ChallengeCard({challenge}) {

  return (
    <div className="card column">
      <div className="card-body">
        <h5 className="card-title">{challenge.challengeTitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Created By: {challenge.username}</h6>
        <p className="card-text">{challenge.challengeText}</p>
        <h6 className="card-startDate">Challenge Started on: {challenge.date}</h6>
        {/* <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> */}
      </div>
    </div>
  )
}

export default ChallengeCard;
