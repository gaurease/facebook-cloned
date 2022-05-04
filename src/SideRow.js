import { Avatar } from '@mui/material';
import React from 'react';
import './SideRow.css'
function SideRow(props) {
  return <div className='siderow'>
      {props.src && <Avatar src={props.src}/>}
      {props.Icon && <props.Icon/>}
      <h4>{props.title}</h4>

  </div>;
}

export default SideRow;
