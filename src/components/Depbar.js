import React from 'react'
import './Depbar.css'
import Logo from '../img/L2.png'

import ComputerIcon from '@mui/icons-material/Computer';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Depbar() {
  return (
    <div className="depbar">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="department">
            <ul className="dep-item">
                
                <li><ComputerIcon fontSize='large'/></li>
                <li><EngineeringIcon fontSize='large'/></li>
                <li><BusinessIcon fontSize='large'/></li>
                <li><AddBoxIcon fontSize='large'/></li>

            </ul>
        </div>
    </div>
  )
}

export default Depbar