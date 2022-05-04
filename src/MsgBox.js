import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './Msgbox.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { red } from '@mui/material/colors';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app'
function MsgBox(props) {
    const[{user},dispatch]=useStateValue()
    const [input,setInput]=useState('')
    const [imgurl,setUrl]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        db.collection('posts').add({
            username:user.displayName,
            Profile:user.photoURL,
            msg:input,
            image:imgurl,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
        setUrl('')
    };
  return(
  <div className='msgbox'>
      <div className='msgbox__top'> 
            <Avatar src={user.photoURL}></Avatar>
            <form>
                <input className='msgbox__top__msg' 
                value={input} onChange={e=>{setInput(e.target.value)}}
                type="text" placeholder={`What's On your Mind ${user.displayName} ? `}>
                </input>
                <input type="text" placeholder='Image URL(Optional)'
                value={imgurl} onChange={(e)=>{setUrl(e.target.value)}}>
                </input>
                <button type="submit" onClick={handleSubmit}>Hidden Button</button>
            </form>
      </div>
    <div className='msgbox__bottom'>
        <div className='msgbox__option'>
            <VideocamIcon style={{color:"red"}}></VideocamIcon>
            <h3>Live Video</h3>
        </div>
        <div className='msgbox__option'>
            <PhotoLibraryIcon style={{color:"green"}}></PhotoLibraryIcon>
            <h3>Photo/video</h3>
        </div>
        <div className='msgbox__option'>
            <InsertEmoticonIcon style={{color:"orange"}}></InsertEmoticonIcon>
            <h3>Feeling/Activity</h3>
        </div>
    </div>
  </div>);
}

export default MsgBox;
