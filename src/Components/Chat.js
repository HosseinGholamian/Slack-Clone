import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoom } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import  Message  from './Message';
function Chat() {

    const roomId = useSelector(selectRoom);
    // const [roomDetails] = useDocument(
    //     roomId && collection(doc(db,'rooms',roomId), 'rooms')
    // )
    // // const [messages, loading, error] = useCollection(
    // //     roomId && collection(doc(db,'rooms',roomId), 'messages'),
    // // )



    // // console.log(messages?.data());
    // console.log(roomDetails?.data());


 


    // const messages = roomId && onSnapshot(collection(doc(db, 'rooms', roomId), 'messages'), (doc) => {
    //     console.log("Current messages: ", doc);
    // });
    const [messages, setMessages] = React.useState([]);
    React.useEffect(() => {

        const q = roomId && query(collection(doc(db, 'rooms', roomId), 'messages'), orderBy("timestamp"));
        const unsubscribe = roomId && onSnapshot(q, (querySnapshot) => {

            setMessages(querySnapshot.docs.map((doc) => {
               
                return ({
                    id : doc.id,
                    messages:doc.data().message,
                    timestamp : doc.data().timestamp,
                    user : doc.data().user,
                    userImage:doc.data().userImage

                })
            }));
        });

    }, [roomId])
    console.log(messages)


    const [roomDetail, setRoomDetail] = React.useState([])
    React.useEffect(() => {
        roomId && onSnapshot(doc(db, "rooms", roomId), (doc) => {
            setRoomDetail(doc.data())
        });
    }, [roomId])

    // const q = roomId && query(collection(doc(db, 'rooms', roomId), 'messages'), orderBy("timestamp", "desc"));
    // onSnapshot(q, (querySnapshot) => {
    //     const messages = 
    //     querySnapshot.map((doc) => {
    //         return (doc.data())
    //     });
    //     console.log("Current messages: ", messages.join(", "));
    // });

    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>room # {roomDetail.name}</strong></h4>
                    <StarBorderIcon />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
            </Header>

            <ChatMessages>
                {/* Lsit out messages */}
                {
                
                messages.map((message)=>{
                    console.log('this is ',message)
                    return (<Message key={message.id} message={message.messages}  timestamp ={message.timestamp} user={message.user} userImage={message.userImage} /> )
                })}
                <ChatInput
                    channelName={roomDetail.name}
                    roomId={roomId}
                />
            </ChatMessages>

        </ChatContainer>
    )
}

export default Chat

const ChatMessages = styled.div``;


const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
display: flex;
align-items: center;
>h4{
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
}

`;
const HeaderRight = styled.div`
>p {
    display: flex;
    align-items: center;
    font-size: 14px;


}
>p > .MuiSvgIcon-root{
    margin-right: 5px !important; 
    font-size: 16px;
}
`;
const ChatContainer = styled.div`
flex: 0.7;
overflow-y:auto ;
flex-grow: 1;
margin-top: 60px;
`;