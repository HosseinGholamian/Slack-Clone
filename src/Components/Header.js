import React from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function Header() {
    return (
        <HeaderContainer>
            {/* Header left */}
            <HeaderLeft>
                <HeaderAvatar
                //ToDo Onclick
                //ToDo src
                >
                    HG
                </HeaderAvatar>
                <AccessTimeIcon />
            </HeaderLeft>
            {/* Header middle */}
            <HeaderMiddle>
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </HeaderMiddle>
            {/* Header right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}



export default Header

const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
padding: 10px 0;
align-items: center;
justify-content: space-between;
background-color: var(--slack-color);
color: white;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;
> .MuiSvgIcon-root{
    margin: 0 30px 0 auto;
}
`;
const HeaderAvatar = styled(Avatar)` 
cursor:pointer;
:hover{
    opacity: 0.8;
}
`;

const HeaderMiddle = styled.div`
    flex: 0.4;
    align-items: center;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    opacity: 1;
    border-radius: 6px;
    color: gray;
    border: 1px gray solid;
    >input{
        background-color: transparent;
        border: none;
        outline: none;
        text-align: center;
        min-width: 30vw;
        color: white;
    }
`;
const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: end;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`;