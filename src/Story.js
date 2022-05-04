import { Avatar } from '@mui/material';
import React from 'react';
import './Story.css'
function Story({image,Profilepic,name}) {
  return(
  <div style={{backgroundImage:`url(${image})`}} className='story'>
      <Avatar className='story__avator' src={Profilepic}></Avatar>
      <h4>{name}</h4>
  </div>);
}

export default Story;
