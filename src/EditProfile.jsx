import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditProfile.css";
import axios from "axios";

function EditProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const profile = location.state;
  const [formData, setFormdata] = useState({
    name: profile?.user?.name || "",
    username: profile?.user?.username || "",
    bio: profile?.user?.bio || "",
    img: profile?.user?.profileImage || "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e?.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const updatedUser = {
      ...profile.user,
      name: formData.name,
      username: formData.username,
      bio: formData.bio,
    };

    const response = await axios.patch(
      "http://localhost:3002/profile/1",
      {
        user: updatedUser,
      }
    );

    navigate("/profile");
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

  return (
    <div className="edit-profile">
      <h2>Edit profile</h2>

      {/* PROFILE IMAGE */}

      <div className="edit-profile-image">
        <img src={formData?.img} alt="profile" />

        <button>Change profile photo</button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* NAME */}

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={(e) => handleOnchange(e)}
          />
        </div>

        {/* USERNAME */}

        <div className="form-group">
          <label>Username</label>

          <input
            type="text"
            name="username"
            value={formData?.username}
            onChange={(e) => handleOnchange(e)}
          />
        </div>

        {/* BIO */}

        <div className="form-group">
          <label>Bio</label>

          <textarea
            value={formData?.bio}
            name="bio"
            onChange={(e) => handleOnchange(e)}
            maxLength={150}
          />
        </div>

        {/* SUBMIT */}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
