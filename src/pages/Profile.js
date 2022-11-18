import React, { useContext } from 'react';
import ChangeProfile from './ChangeProfile';
import { AppContext } from '../App';

const Profile = (props) => {
    const {username} = useContext(AppContext);
  return (
    <div>
      profile: username is {username}
      <ChangeProfile />
    </div>
  )
}

export default Profile
