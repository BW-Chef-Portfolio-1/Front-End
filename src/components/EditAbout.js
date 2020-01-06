import React from "react";

const EditAbout = () => {
  return (
    <div className="about-edit-div">
      <div>
        <h1>Edit About</h1>
      </div>
      <form className="about-form">
        {/* <label className="about-label"> About:</label> */}
        <textarea
          rows="15"
          cols="70"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #07fe20",
            fontSize: "20px",
            color: "#f3ffef",
            width: "80%"
          }}
          type="text"
          name="about"
          placeholder="Share a little bit about yourself here! Why you love to cook and why you want to share some of your awesome recipes!"
          className="about-input"
        />

        <button className="about-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditAbout;
