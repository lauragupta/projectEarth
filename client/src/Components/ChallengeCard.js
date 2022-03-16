import React from 'react';
import {Link} from 'react-router-dom';
import './ChallengeCard.scss'

function ChallengeCard({challenge}) {
  
  return (
    <div className="card column">
      <div className="card-body">
        <h5 className="card-title"><Link to={`/challenges/${challenge.id}`}>{challenge.challengeTitle}</Link></h5>
        <h6 className="card-subtitle mb-2 text-muted">Created By: {challenge.user.username}</h6>
        <p className="card-text">{challenge.challengeText}</p>
        <h6 className="card-startDate">Challenge Started on: {challenge.date}</h6>
      </div>
    </div>
  )
}

export default ChallengeCard;
