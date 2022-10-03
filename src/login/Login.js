import React from 'react'
import './Login.css'
import Logo from '../img/L2.png'
import { Button } from '@mui/material'
import { auth,provider } from '../firebase';
// import PB from "./PB"

import {ref,set,onvalue} from "firebase/database"
import { FaxRounded } from '@mui/icons-material';

function Login() {
 const signIn = () => {
  auth.signInWithPopup(provider).catch((error) => alert(error.message));

 };

  return (
    <div className="login">
        <div className="login-logo">
            <img src={ Logo } alt="logo" />
        </div>
     
        {/* <PB /> */}
          <p className="appname">
            Cube
          </p>

        <Button onClick={signIn}>Sign In</Button>
        
        <link src="spot.js"></link>
    </div>
  )
}

export default Login