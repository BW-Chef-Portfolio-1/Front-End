import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../utils/actions";
import { Link } from "react-router-dom";

const CreateRecipe = props => {
  const userId = localStorage.getItem("userId");
  const [newRecipe, setNewRecipe] = useState({
    recipe_name: "",
    prep_time: "",
    cook_time: "",
    servings: "",
    recipe_photo: "",
    ingredients: "",
    instructions: "",
    user_id: userId
  });
  console.log("this is the new recipe", newRecipe);

  const handleSubmit = e => {
    e.preventDefault();
    props.addRecipe(newRecipe);
    props.history.push(`/chefdashboard/${localStorage.getItem("userId")}`);
  };
  const handleChanges = e => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2 className="title">Create New Recipe</h2>
      <div className="add-form">
        <form onSubmit={handleSubmit}>
          <span>
            <p>Recipe Name</p>
            <input
              className="name"
              type="text"
              name="recipe_name"
              value={newRecipe.recipe_name}
              onChange={handleChanges}
            />
          </span>
          <span>
            <p>Prep Time</p>
            <input
              type="text"
              name="prep_time"
              value={newRecipe.prep_time}
              onChange={handleChanges}
            />
          </span>
          <span>
            <p>Cook Time</p>
            <input
              type="text"
              name="cook_time"
              value={newRecipe.cook_time}
              onChange={handleChanges}
            />
          </span>
          <span>
            <p>Servings</p>
            <input
              type="text"
              name="servings"
              value={newRecipe.servings}
              onChange={handleChanges}
            />
          </span>

          <h2>
            Add Photo<i class="fa fa-file-image-o"></i>
          </h2>

          <span>
            <p>Image URL</p>
            <input
              className="name"
              type="text"
              name="recipe_photo"
              value={newRecipe.recipe_photo}
              onChange={handleChanges}
            />
          </span>
          <div>
            <p className="bottom-text">Add Ingredients</p>
            <textarea
              className="ingredients"
              type="text"
              name="ingredients"
              placeholder="Ingredients:"
              rows="15"
              cols="100"
              value={newRecipe.ingredients}
              onChange={handleChanges}
            ></textarea>
          </div>
          <div>
            <p className="bottom-text">Add Instructions</p>
            <textarea
              className="directions"
              type="text"
              name="instructions"
              placeholder="Directions:"
              rows="15"
              cols="100"
              value={newRecipe.instructions}
              onChange={handleChanges}
            ></textarea>
          </div>
          {/* <Link to={`/chefdashboard/${localStorage.getItem("userId")}`}> */}
          <button type="submit">Create Post</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  // return state;
  return {
    recipes: state.recipes,
    isFetching: state.isFetching,
    error: state.error
  }
};

export default connect(mapStateToProps, { addRecipe })(CreateRecipe);
