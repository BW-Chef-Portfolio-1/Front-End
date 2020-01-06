import React from "react";

const EditProfilePicture = () => {
  return (
    <div className="profile-pic-div">
      <div>
        <h1>Edit Profile Picture</h1>
      </div>
      <div className="image-div"></div>
      <form className="profile-pic-form">
        <input
          type="text"
          name="profileImg"
          placeholder="Insert Image URL"
          className="profile-pic-input"
        />
        <button className="profile-pic-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfilePicture;
