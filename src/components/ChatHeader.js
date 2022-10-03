import React from 'react'
import './ChatHeader.css'
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

function ChatHeader( {/*{ channelName } */}) {
    
    // useEffect(() => {
    //     if (yearId) {
    //         db.collection("channels").doc(channelId).collection('messages').orderBy('timestamp','asc')
    //         .onSnapshot((snapshot) => 
    //             setMessages(snapshot.docs.map((doc) => doc.data()))
    //         ); 
    //     }
    // },[yearId]);

  return (
    <div className="chatheader">
        
            <h3>
            <span className="hash"><SwipeRightAltIcon/>
            {/* { channelName } */}
            </span>
            </h3>
            {/* <button className='header-year' onClick={handleFE}>FE</button>
            <button className='header-year' onClick={handleSE}>SE</button>
            <button className='header-year' onClick={handleTE}>TE</button>
            <button className='header-year' onClick={handleBE}>BE</button> */}

         {/*<button className='header-year' onClick={somefunction}>FE</button>
            <button className='header-year' onClick={somefunction}>SE</button>
            <button className='header-year' onClick={somefunction}>TE</button>
            <button className='header-year' onClick={somefunction}>BE</button> */}
            
            <button className='header-year'>FE</button>
            <button className='header-year'>SE</button>
            <button className='header-year'>TE</button>
            <button className='header-year'>BE</button>

            <HomeIcon />
            <PeopleAltIcon />
            <InfoIcon />
            <SettingsIcon />

        
    </div>
  )
}

export default ChatHeader