import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

export const Posts = (props) => {

    const [user, setUser] = useState(props.user);
    const [posts, setPosts] = useState(props.posts);
    const [addFlag, setAddFlag] = useState(false);
    const [tempPost, setTempPost] = useState(posts[0]);
    
    function handleAdd() {
        setAddFlag(true);
      }
    
      function handleCancel() {
        setAddFlag(false);
    
      }
    
      function handleAddPost() {
        props.addNewPost(tempPost);
        setAddFlag(false);
      }    

  return (
    <>
        <strong style={{paddingLeft: '20px'}}>Posts - user {user.id}</strong><button style={{marginLeft: '52%', padding: '10px'}} onClick={handleAdd}>Add</button><br/>
        {!addFlag ?
        <div style={{border: '3px solid black', width: 'fit-content', padding: '10px', margin: '10px'}}>
            {posts.map((post) => <PostCard key={post.id} post={post}/>)}
        </div> :
        <div style={{display: 'inline-table', border: '3px solid black', width: '350px', paddingTop: '10%', paddingLeft: '10%', paddingBottom: '10px', marginBottom: '10px'}}>
            <strong>Title : </strong><input style={{marginInline: '30px'}} size={15} type='text' onChange={e => setTempPost({...tempPost, title: e.target.value})}></input><br/><br/>
            <strong>Body : </strong><input style={{marginInline: '30px'}} size={15} type='text' onChange={e => setTempPost({...tempPost, body: e.target.value})}></input><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}><button onClick={handleCancel}>Cancel</button><button onClick={handleAddPost}>Add</button></div>
        </div>}
    </>
  )
}
