import React from 'react'
import './profile.css'

const Profile = ({ profile }) => {
    return (
      <div className='profile' key={profile.id}>
        <div className='image'>
          <img src={profile.picture} alt='' />
        </div>
        <div className='info'>
          <p key={profile.id}>{profile.id}</p>
          <h5>{`${profile.title}. ${profile.firstName} ${profile.lastName}`}</h5>
        </div>
      </div>
    );
  };

export default Profile