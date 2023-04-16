import React from 'react'
import Profile from '../Profile/Profile'
import './profilelist.css'
import profiles from '../../data/data';

const ProfileList = ({ searchTerm }) => {
  const filteredProfiles = profiles.filter((profile) => {
    const fullName = `${profile.title}. ${profile.firstName} ${profile.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='profile-list'>
      {filteredProfiles.map((profile) => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList