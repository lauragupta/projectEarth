import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import ChallengeCard from '../ChallengeCard';
import {API_ROOT} from '../../constants';
import auth from '../../utils/auth';


function SingleChallenge() {
  const [challenge, setChallenge] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`${API_ROOT}/api/challenges/${params.challengeId}`)
    .then(response => response.json())
    .then(data => setChallenge(data.challenge))
  }, []) 

  let navigate = useNavigate();

  function onClick(e) {
    //make the api call to delete the challenge
    const token = auth.getToken()
    console.log("token", token);
    fetch(`${API_ROOT}/api/challenges/${params.challengeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: token ? `Bearer ${token}` : '',
      },
    })
    //re-route to the challenge page
    .then( () => navigate('/'))
  }
  const challengeAuthorId = challenge?.user?.id
  const profile = auth.getProfile()
  const userIsAuthor = challengeAuthorId === profile.data._id

  return (
    <div>
      <h1>Check out this challenge! Would you like to join? </h1>
      <div>
        {challenge && <ChallengeCard challenge={challenge} />} 
        {userIsAuthor && <Link to={`/challenges/${challenge.id}/update`}>Edit Challenge</Link>}
        {userIsAuthor && <button className="btn-sm btn-primary" type="button" onClick={onClick}>Delete Challenge</button>}
      </div>
    </div>
  )
}

export default SingleChallenge