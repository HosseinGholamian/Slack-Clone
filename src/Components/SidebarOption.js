import React from 'react'
import styled from 'styled-components'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';


function SidebarOption({ Icon, title, AddChannelOption, id }) {
const dispatch = useDispatch()

    const addChannel = async () => {
        const channelName = prompt('Please Enter the channel name!')
        if (channelName) {
            const docRef = await addDoc(collection(db, "rooms"), {
                name: channelName,

            });
        }
    }
    const selectChannel = () => { 

        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }
    return (
        
            <SidebarOptionContainer
                onClick={AddChannelOption ? addChannel : selectChannel}
            >
                {Icon && <Icon fontSize='small' />}
                {Icon ? (
                    <h3>{title}</h3>
                ) : (
                    <SidebarOptionChannel>

                        <span>#</span> {title}

                    </SidebarOptionChannel>
                )}

            </SidebarOptionContainer>
       
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
padding: 10px;
transition: 0.3s ease-out;
> h3{
    margin-left: 5px;
    font-weight: 400;
}
:hover{
    opacity: 0.9;
    background-color: #340e36;
}
>h3 > span{
    padding: 15px;
}
`;


const SidebarOptionChannel = styled.h3`
font-weight: 300;
padding: 5px 0;
`