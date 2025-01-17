import React, { useState } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';

function Post({ username, imageUrl, caption }) {

    return (
        <div className='posts'>
            <div className="post__header">
                <Avatar className="post__avatar" alt={username} src="/static/images/avatar/1.jpg"/>
                {/* header -> username + avatar */}
                <h3 className="post__username">{username}</h3>
            </div>
            
            {/* image */}
            <img className="post__image" src={imageUrl} alt="post"/>
            {/* username + caption */}
    <h4 className="post__imageCaption"><strong>{username}:</strong> {caption}</h4>
        </div>
    )
}

export default Post
