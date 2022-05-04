import React, { useEffect, useState } from 'react';
import MsgBox from './MsgBox';
import StoryReel from './StoryReel';
import './feed.css'
import Post from './Post';
import db from './firebase';
function Feed() {
  const [posts,setPost]=useState([])

  useEffect(()=>{
    db.collection('posts').orderBy("timestamp","desc").onSnapshot(docSnapshot => {
      setPost(docSnapshot.docs.map((doc)=>({ id:doc.id,data:doc.data()})))
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  },[]);
  return <div className='feed'>
      <StoryReel></StoryReel>
      <MsgBox></MsgBox>
      {posts.map((post)=>(      
      <Post 
      Profile={post.data.Profile}
      user={post.data.username}
      img={post.data.image}
      message={post.data.msg}
      timestamp={post.data.timestamp}
      ></Post>))
      }
  </div>;
}

export default Feed;
