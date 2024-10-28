import React from "react";
import "./Home.css";
function Home() {
  const posts = [
    {
      username: "john_doe",
      imageUrl: "https://via.placeholder.com/600x400",
      caption: "Loving the view!",
      avatarUrl: "https://via.placeholder.com/150",
    },
    {
      username: "jane_doe",
      imageUrl: "https://via.placeholder.com/600x400",
      caption: "Best vacation ever!",
      avatarUrl: "https://via.placeholder.com/150",
    },
    // Add more posts as needed
  ];

  return (
    <div className="feed-container">
      <header className="header">
        <div className="header-left">
          <h1 className="header-logo">Instagram</h1>
        </div>
        <div className="header-right">
          <img
            src={posts.imageUrl}
            alt="Profile"
            className="header-profile-pic"
          />
        </div>
      </header>

      <div className="feed">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="post-header">
              <img
                src={post.avatarUrl}
                alt={post.username}
                className="post-avatar"
              />
              <h2 className="post-username">{post.username}</h2>
            </div>
            <img src={post.imageUrl} alt="Post" className="post-image" />
            <p className="post-caption">
              <strong>{post.username}</strong> {post.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
