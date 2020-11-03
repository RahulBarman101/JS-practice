import './App.css';
import Post from './Post';
import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import ImageUpload from './ImageUpload'

function App() {
  const [posts, setPosts] = useState([]) 

  // useEffect - use code on a specific condition
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // every time new posts it collects that
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    });
  },[]);

  return (
    <div className="App">
      <div className="app__header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
         alt="instagram-logo" className="app__headerImage"/>
      </div>
      {
        posts.map(({id,post}) => {
          return <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        })
      }
      <ImageUpload />
    </div>
  );
}

export default App;
