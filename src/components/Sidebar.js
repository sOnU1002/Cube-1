import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import Vein from './Vein.js';
import SchoolIcon from '@mui/icons-material/School';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';

function Sidebar() {

  const user = useSelector(selectUser);
  const [ channels, setChannels ] = useState([]);

  useEffect(() => {
    db.collection('channels')
    .onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        channel: doc.data(),
      })))
    })
  },[])

  const handleAddChannel = () => {
    const channelName = prompt("Enter name of the new Vein:");

    if(channelName) {
      db.collection("channels").add({
        channelName: channelName,
      })
    }
  }

  return (
    <div className="sidebar">
      {/* <div className="sidebar-top">
        <h3>Department</h3>
      </div> */}

      <div className="sidebar-veins">
        <div className="vein-header">
          <div className="vein-name">
            <h4>Veins</h4>
          </div>
            <AddIcon onClick={handleAddChannel} className='add-vein' />
        </div>
        <div className="vein-list">
          {channels.map(({ id,channel }) => (
            <Vein key={id} id={id} channelName={channel.channelName} />
          ))}
        </div>
      </div>
      <div className="sidebar-year">
        <SchoolIcon className='year' fontSize='large'/>
        <div className="year-input">
          <h3>FE</h3>
        </div>
      </div>
      <div className="profile">
        <Avatar src={user.photo}/>
        <div className="profile-info">
          <h3>{user.displayName}</h3>
        </div>
          <div className="exit">
              <LogoutIcon onClick={() => auth.signOut()} />
          </div>
        </div>
    </div>
  )
}

export default Sidebar