import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Message from './Message'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import db from '../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Chat() {

    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        if (channelId) {
            db.collection("channels").doc(channelId).collection('messages').orderBy('timestamp','asc')
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ); 
        }
    },[channelId]);

    const sendMessage = e => {
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");
    };

  return (
    <div className="chat">
        <ChatHeader channelName={ channelName }/>
        <div className="messages">
            {messages.map((message) => (
                <Message 
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                />
            ))}
        </div>
        <div className="input">
            <AddCircleIcon />
            <form>
                <input value={ input } disabled={!channelId} onChange={e => setInput(e.target.value)} placeholder={`Message in ${channelName} ...`} />
                <button disabled={!channelId} className='send' type='submit' onClick={sendMessage}>Send Message</button>
            </form>

            <div className="inputicons">
                <AttachFileIcon />
                <GifBoxIcon />
                <EmojiEmotionsIcon />
            </div>
        </div>
    </div>
    )
}

export default Chat