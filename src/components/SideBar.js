import React from 'react';
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create"
import SideBarOption from './SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function SideBar(props) {
    const [channels] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth)
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>NENEVADER</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Nenevader
                    </h3>
                </SideBarInfo>
                <CreateIcon />
            </SideBarHeader>

            <SideBarOption Icon={InsertCommentIcon} title="Threads" />
            <SideBarOption Icon={InboxIcon} title="Mention & reactions" />
            <SideBarOption Icon={DraftsIcon} title="Saved items" />
            <SideBarOption Icon={BookmarkBorderIcon} title="Chanel browser" />
            <SideBarOption Icon={FileCopyIcon} title="People & user groups" />
            <SideBarOption Icon={PeopleAltIcon} title="Apps" />
            <SideBarOption Icon={AppsIcon} title="File browser" />
            <SideBarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title="Show more" />
            <hr />
            <SideBarOption Icon={AddIcon} addChannelOption title="Add Chanel" />
            {channels?.docs.map(doc => (
                <SideBarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name} />
            ))}
        </SideBarContainer>
    );
}

export default SideBar;

const SideBarContainer = styled.div`
color: white;
 background-color: var(--slack-color);
 flex: 0.3;
 border-top: 1px solid #49274b;
 max-width: 260px;
 margin-top: 60px; 

 > hr {
     margin-top: 10px;
     margin-bottom: 10px;
     border: 1px solid #49274b;
 }
`;

const SideBarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;

> .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-side: 18px;
    background-color: white;
    border-radius: 999px;
}
`;

const SideBarInfo = styled.div`
flex: 1;

> h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}

> h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}

> h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`;
