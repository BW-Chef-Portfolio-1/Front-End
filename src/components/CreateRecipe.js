import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../utils/actions";
import { Button } from 'reactstrap';

const CreateRecipe = (props) => {
  const [newRecipe, setNewRecipe] = useState({
    recipe_name: "",
    type: "",
    theme: "",
    prep_time: "",
    cook_time: "",
    servings: "",
    recipe_photo: "",
    ingredients: "",
    instructions: "",
    notes: "",
    id: ""
  });

  const userId = localStorage.getItem("userId");

  const handleChanges = event => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    addRecipe(newRecipe)
  }

  return (
    <div>
      <h2 className="title">Create New Recipe</h2>
      <div className="add-form">
        <form onSubmit={handleSubmit}>
          <span>
            <p>Recipe Name</p>
            <input className="name" 
                   type="text" 
                   name="recipe_name" 
                   value={newRecipe.recipe_name}
                   onChange={handleChanges} />
          </span>
          <span>
            <p>Type</p>
            {/* <input className="type" type="text" name="type" onChange={handleChanges} /> */}
            <select
                className="type"
                name="mealType"
                onChange={handleChanges}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
              </select>
          </span>
          <span>
            <p>Theme</p>
            <input className="theme" type="text" name="theme" onChange={handleChanges}/>
          </span>
          <span>
            <p>Prep Time</p>
            <input type="text" name="prep_time" onChange={handleChanges} />
          </span>
          <span>
            <p>Cook Time</p>
            <input type="text" name="cook_time" onChange={handleChanges} />
          </span>
          <span>
            <p>Servings</p>
            <input type="text" name="servings" onChange={handleChanges} />
          </span>

          <h2>
            Add Photo<i class="fa fa-file-image-o"></i>
          </h2>

          <span>
            <p>Image URL</p>
            <input className="name" type="text" name="Photo" onChange={handleChanges} />
          </span>
          <div>
            <p className="bottom-text">Add Ingredients</p>
            <textarea
              className="ingredients"
              type="text"
              name="Ingredients"
              placeholder="Ingredients:"
              rows="10"
              cols="60"
              onChange={handleChanges}
            ></textarea>
          </div>
          <div>
            <p className="bottom-text">Add Instructions</p>
            <textarea
              className="directions"
              type="text"
              name="Directions"
              placeholder="Directions:"
              rows="10"
              cols="30"
              onChange={handleChanges}
            ></textarea>
          </div>
          <div>
            <p className="bottom-text">Additional Notes</p>
            <textarea
              className="notes"
              type="text"
              name="Additional Notes"
              rows="10"
              cols="30"
              onChange={handleChanges}
            ></textarea>
          </div>
          <Button type="submit">Create Post</Button>
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
