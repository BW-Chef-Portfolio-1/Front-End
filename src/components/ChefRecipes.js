import React from "react";
import CreateRecipe from "./CreateRecipe.js";
import RecipeImg from "./RecipeImg.js";

const ChefRecipes = () => {
    return (
        <div className="recipe-list">
            <p>List of Chef recipes go here</p>
            <RecipeImg />
        </div>
    )
}

export default ChefRecipes;