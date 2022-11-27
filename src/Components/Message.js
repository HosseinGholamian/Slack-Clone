import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

function Message({ message, timestamp, user, userImage }) {

    var dateFormat = new Date(timestamp?.seconds);

    var date = dateFormat.getDate() +
        "/" + (dateFormat.getMonth() + 1) +
        "/" + dateFormat.getFullYear() +
        " " + dateFormat.getHours() +
        ":" + dateFormat.getMinutes() +
        ":" + dateFormat.getSeconds();

    return (
        <MessageContainer>
            <Avatar
                alt="avatar"
                className="avatar"
                sizes="larg"
                src={userImage}
            >
                {user[0]}
            </Avatar>
            <MessageInfo>
                <h4>{user}{' '} <span>{date}</span></h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;
> .avatar{  
    margin: 10px  10px;
}
`;
const MessageInfo = styled.div`

    background-color: snow;
    border-radius: 10px;
    padding: 10px;
    width: 40%;
    overflow-wrap: break-word;
    >h4{
        display: flex;
        border-bottom: 1px solid whitesmoke;
        margin: 5px 0;
        padding: 5px 0;
    }

    >h4 >span{
        color: gray;
        margin-left: auto;
        font-weight: 400;
        font-size: 13px;
    }
    >p{
        margin: 10px 5px;
    }
`;