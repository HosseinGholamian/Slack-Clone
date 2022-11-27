import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
function Sidebar() {
    
    const [channels, loading, error] = useCollection(
        collection(db, 'rooms')
    )

    
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Hossien Gholamian
                    </h3>

                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <SidebarOption Icon={InsertCommentIcon} title='Threads' />
            <SidebarOption Icon={InboxIcon} title='Mentions & Reactions' />
            <SidebarOption Icon={DraftsIcon} title='Saved items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
            <SidebarOption Icon={PeopleAltIcon} title='Peaple & user groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />

            <hr/>
            <SidebarOption Icon={ExpandLessIcon} title='Channel'/>
            <hr/>
            <SidebarOption Icon={AddIcon} AddChannelOption title='Add Channel'/>


        {channels?.docs.map((doc)=>{
            return (<SidebarOption key={doc.id} id={doc.id}   title={doc.data().name}/>)

        })}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
background-color: var(--slack-color);
color: #fff;
flex: 0.3;
max-width: 260px;
margin-top: 60px;

>hr{
    margin: 10px 0 ;
    border: 1px solid #49274b;
}
`;


const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;
> .MuiSvgIcon-root{
   color: #49274b;
   background-color: white;
   padding: 8px;
   border-radius: 99px;
   font-size: 30px;
}
`;
const SidebarInfo = styled.div`
flex: 1;
> h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}
>h3{
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
}

>h3 > .MuiSvgIcon-root{
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`;