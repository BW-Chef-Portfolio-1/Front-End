import React from "react";

export default function RecipeCard(props) {
  return (
    <div className="dashboard-card">
      <img width="200px" src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.info}</p>
    </div>
  );
}
