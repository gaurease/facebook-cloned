import React from 'react';
import './Sidebar.css'
import SideRow from './SideRow';
import './Sidebar.css'
/*
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
*/
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import { useStateValue } from './StateProvider';
function Sidebar() {
  const[{user},dispatch]=useStateValue()
  return <div>
    <SideRow src={user.photoURL} title={user.displayName}></SideRow>
    <SideRow title="Friends" Icon={PeopleOutlineOutlinedIcon}></SideRow>
    <SideRow title='Groups' Icon={GroupsOutlinedIcon}></SideRow>
    <SideRow title='Market place' Icon={StorefrontIcon}></SideRow>
    <SideRow title='Watch' Icon={OndemandVideoOutlinedIcon}></SideRow>
    <SideRow title='Memories' Icon={WatchLaterOutlinedIcon}></SideRow>
    <SideRow title='Saved' Icon={BookmarkIcon} ></SideRow>
    <SideRow title='Pages' Icon={FlagOutlinedIcon}></SideRow>
    <SideRow Icon={ExpandMoreOutlinedIcon}></SideRow>
  </div>;
}

export default Sidebar;
