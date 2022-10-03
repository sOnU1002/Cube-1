import React from 'react'
import './Login.css'
import Logo from '../img/L2.png'
import { Button } from '@mui/material'
import { auth,provider } from '../firebase';

function Login() {
 const signIn = () => {
  auth.signInWithPopup(provider).catch((error) => alert(error.message));

 };

  return (
    <div className="login">
        <div className="login-logo">
            <img src={ Logo } alt="logo" />
        </div>
          <p className="appname">
            Cube
          </p>

        <Button onClick={signIn}>Sign In</Button>

    </div>
  )
}

export default Login