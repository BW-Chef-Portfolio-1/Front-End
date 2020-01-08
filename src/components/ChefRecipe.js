import React, { useState } from "react";
import axios from "axios";

const ChefRecipe = props => {
  let recipeid = props.match.params.id;
  const [recipe, setRecipe] = useState({});
  axios
    .get(`https://backend-chef.herokuapp.com/api/recipes/recipeId/${recipeid}`)
    .then(res => {
      setRecipe(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  return (
    <div className="chef-recipe-div">
      <h2>{recipe.recipe_name}</h2>
      <img
        className="recipe-image"
        src={recipe.recipe_photo}
        alt={recipe.recipe_name}
      />
      <h3>Prep Time:</h3>
      <p>{recipe.prep_time}</p>
      <h3>Cook Time:</h3>
      <p>{recipe.cook_time}</p>
      <h3>Servings:</h3>
      <p>{recipe.servings}</p>
      <h2>Ingredients</h2>
      <p>{recipe.ingredients}</p>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>

      <div className="recipe-buttons-div">
        <button className="edit-recipe-button">Edit</button>
        <button className="delete-recipe-button">Delete</button>
      </div>
    </div>
  );
};

export default ChefRecipe;
