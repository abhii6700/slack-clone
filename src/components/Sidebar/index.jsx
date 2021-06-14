import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from "@material-ui/icons/Create"
import SidebarOption from './SidebarOption';
import { Add, BookmarkBorder, Drafts, ExpandLess, ExpandMore, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const SideBar = () => {
    const [channels] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth)

    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Konoha</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </SideBarInfo>
                <CreateIcon />
            </SideBarHeader>

            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channel" />


            {channels?.docs.map(doc => (
                <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />

            ))}


        </SideBarContainer>
    )
}

export default SideBar

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
        border: 1px solid #49274b
    }
`;

const SideBarHeader = styled.div` 
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
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