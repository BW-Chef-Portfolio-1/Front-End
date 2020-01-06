import React from "react";

const EditInfo = () => {
  return (
    <div className="info-div">
      <div>
        <h1>Edit Info</h1>
      </div>
      <form className="info-form">
        <label className="info-labels">Full Name</label>
        <input type="text" name="name" className="info-inputs" />

        <label className="info-labels">Email</label>
        <input type="text" name="email" className="info-inputs" />

        <label className="info-labels">Location</label>
        <input type="text" name="location" className="info-inputs" />

        <label className="info-labels">Phone Number</label>
        <input type="text" name="phone number" className="info-inputs" />
        <div className="info-button-div">
          <button className="info-button">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditInfo;
