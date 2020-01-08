import React, { useEffect, useState } from "react";
import { Card, CardImg } from "reactstrap";
import { connect } from "react-redux";
import { getRecipe } from "../utils/actions";
import { Link } from "react-router-dom";

const RecipeImg = props => {
  const [recepies, setRecepies] = useState();
  console.log(recepies);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    props.getRecipe(userId);
    setRecepies(props.recipe);
  }, []);
  console.log("this is props", props);
  return (
    <div>
      <Card>
        {props.chefInfo &&
          props.recipe &&
          props.recipe.map(value => {
            console.log(value);
            return (
              <Link to={`/recipe/${value.id}`}>
                <CardImg
                  style={{
                    width: "230px",
                    height: "230px",
                    borderRadius: "10px",
                    marginTop: "20px",
                    marginRight: "70px"
                  }}
                  src={value.recipe_photo}
                  class="img-thumbnail"
                  alt="sushi"
                />
              </Link>
            );
          })}
      </Card>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getRecipe })(RecipeImg);
