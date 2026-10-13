import React from "react";
import Story from "./Story";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="feed">
      <div className="story-section">
        <Story />
      </div>

      <div className="post-section">
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
