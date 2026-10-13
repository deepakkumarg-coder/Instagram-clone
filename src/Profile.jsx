import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3002/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((error) => setProfile(null));
  }, []);

  return (
    <>
      {profile ? (
        profile.map((prof,index) => (
          <div className="profile" key={index}>
            {/* PROFILE HEADER */}
            <div className="profile-header">
              {/* PROFILE IMAGE */}
              <div className="profile-image-container">
                <img
                  src={prof?.user?.profileImage}
                  alt={prof?.user?.username}
                  className="profile-image"
                />
              </div>

              {/* PROFILE INFO */}
              <div className="profile-info">
                {/* USERNAME + BUTTONS */}
                <div className="profile-top">
                  <h2>{prof?.user?.username}</h2>

                  <button className="profile-btn" onClick={()=>navigate("/edit-profile",{state:prof})}>Edit profile</button>

                  <button className="profile-btn">View archive</button>

                  <button className="settings-btn">⚙️</button>
                </div>

                {/* COUNTS */}
                <div className="profile-stats">
                  <span>
                    <strong>{prof?.user?.postsCount}</strong> posts
                  </span>

                  <span>
                    <strong>{prof?.user?.followersCount}</strong> followers
                  </span>

                  <span>
                    <strong>{prof?.user?.followingCount}</strong> following
                  </span>
                </div>

                {/* NAME + BIO */}
                <div className="profile-bio">
                  <strong>{prof?.user?.name}</strong>

                  {/* {profile.bio.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))} */}
                  <strong>{prof?.user?.bio}</strong>
                </div>
              </div>
            </div>

            {/* PROFILE ACTIONS */}
            <div className="profile-actions">
              <button>Share profile</button>
            </div>

            {/* TABS */}
            <div className="profile-tabs">
              <div className="profile-tab active">
                <i className="bi bi-grid-3x3"></i>
                <span>POSTS</span>
              </div>

              <div className="profile-tab">
                <i className="bi bi-play-btn"></i>
                <span>REELS</span>
              </div>

              <div className="profile-tab">
                <i className="bi bi-person-square"></i>
                <span>TAGGED</span>
              </div>
            </div>

            {/* POSTS GRID */}
            <div className="posts-grid">
              {prof?.posts.map((post, index) => (
                <div className="post-item" key={index}>
                  <img src={post?.image} alt={`post-${index}`} />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="profile-not-found">
          <div className="not-found-icon">🔍</div>

          <h2>User not found</h2>

          <p>
            The page you're looking for doesn't exist or may have been removed.
          </p>

          <button onClick={() => window.history.back()}>Go back</button>
        </div>
      )}
    </>
  );
}

export default Profile;
