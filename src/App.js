import React, { useEffect } from 'react';
import socketIO from "socket.io-client";
//import{ BrowseeRouter as Router,Route} from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';
import Depbar from './components/Depbar';
import Chat from './components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser , logout } from './features/userSlice';
import Login from './login/Login';
import { auth } from './firebase';

const ENDPOINT='http://localhost:4500/';
const socket = socketIO(ENDPOINT, { transports: ['websocket']});

function App() {
    socket.on("connect", ()=>{

    })

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName, 

        }))
      }
      else {
        dispatch(logout());
      }
    })

  }, [dispatch] );

  return (
    <div className="App">

      {user ? (
        <>
          <Depbar />
          <Sidebar />
          <Chat />
        </>
      ): (
        <Login />
      )}

    </div>
  );
}

export default App;
