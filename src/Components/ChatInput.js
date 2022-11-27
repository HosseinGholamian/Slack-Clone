
import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"
import {  serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName, roomId }) {
console.log(channelName)
    
    const [input, setInput] = React.useState('')
    const sendMessage = (e) => {
        e.preventDefault();
        if (!roomId) {
            return false;
        }
        
        addDoc(collection(doc(db, 'rooms', roomId),'messages'),{
            message: input,
            timestamp : serverTimestamp(),
            user:'Hossein Gholamian',
            userImage : ''
        })
       

        // const roomRef = doc(db, 'rooms', 'roomId');
        // setDoc(roomRef,  addDoc(collection(db, "messages"), {
        //     message: input,
        //     timestamp : serverTimestamp(),
        //     user:'Hossein Gholamian',
        //     userImage : ''
        // }));
        // console.log('add')
        setInput('')
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)}  type="text" placeholder={`Message # ${channelName? channelName : ''}`} />
                <Button type='submit' onClick={sendMessage}> Send</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
border-radius: 20px;
>form{
    position: relative;
    display: flex;
    justify-content: center;
}

>form >input{
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}
>form >button{
    display: none;
}
`;