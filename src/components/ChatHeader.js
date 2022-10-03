import React from 'react'
import './ChatHeader.css'
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

function ChatHeader( {/*{ channelName } */}) {
  return (
    <div className="chatheader">
        
            <h3>
            <span className="hash"><SwipeRightAltIcon/>
            {/* { channelName } */}
            </span>
            </h3>
            <p className='header-year'>FE</p>
            <p className='header-year'>SE</p>
            <p className='header-year'>TE</p>
            <p className='header-year'>BE</p>

            <HomeIcon />
            <PeopleAltIcon />
            <InfoIcon />
            <SettingsIcon />

        
    </div>
  )
}

export default ChatHeader