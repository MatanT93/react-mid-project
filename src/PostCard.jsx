import React, { useState } from 'react'

const PostCard = (props) => {

    const [post, setPost] = useState(props.post);

  return (
    <div style={{border: '3px solid black', padding: '5px', marginBottom: '10px'}}>
      <strong>Title:   </strong>{post.title} <br/>
      <strong>Body:   </strong>{post.body}
    </div>
  )
}

export default PostCard