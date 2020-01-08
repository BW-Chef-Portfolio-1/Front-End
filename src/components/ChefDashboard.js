import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getChef } from "../utils/actions";
import RecipeImg from "./RecipeImg";
const ChefDashboard = props => {
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    props.getChef(userId);
  }, []);
  console.log(props);
  return (
    <div className="dashboard-body">
      <div className="inner-body">
        <div className="left-div">
          <div className="img-div">
            <Link to="/edit-profile-picture/:id">
              <img
                className="chef-img"
                src={props.chefInfo.user_picture}
                alt="Chef"
              />
              <i
                className="far fa-edit"
                style={{
                  color: "white",
                  marginTop: "55%",
                  fontSize: "20px"
                }}
              ></i>
            </Link>
          </div>

          <div className="chef-info">
            <Link
              to={`/edit-info/${localStorage.getItem("userId")}`}
              style={{ textDecoration: "none" }}
            >
              <h3>
                Personal Info{" "}
                <i class="far fa-edit" style={{ color: "white" }}></i>
              </h3>
            </Link>

            <span>
              <i class="far fa-user"></i> {props.chefInfo.full_name}
            </span>
            <span>
              <i class="far fa-envelope"></i> {props.chefInfo.email}
            </span>
            <span>
              <i class="fas fa-location-arrow"></i> {props.chefInfo.Location}
            </span>
            <span>
              <i class="fas fa-phone-alt"></i> {props.chefInfo.phone}
            </span>
          </div>
        </div>

        <div className="right-div">
          <div className="name-div">
            <h1>{props.chefInfo.full_name}</h1>

            <h2>{props.chefInfo.Location}</h2>
          </div>

          <div className="about-div">
            <Link
              to={`/edit-about/${localStorage.getItem("userId")}`}
              style={{ textDecoration: "none" }}
            >
              <h2>About:</h2>
              <p>{props.chefInfo.Bio}</p>
              <i
                class="far fa-edit"
                style={{ color: "white", fontSize: "20px" }}
              ></i>
            </Link>
          </div>
          <div className="recipes-div">
            {/* <h3>Recipes</h3> */}
            <span>
              Recipes{" "}
              <Link to="/add-recipe">
                <i
                  class="fas fa-plus"
                  style={{
                    border: "2px solid  #07fe20",
                    borderRadius: "20px",
                    padding: "3px",
                    fontSize: "20px",
                    color: "white"
                  }}
                ></i>
              </Link>
            </span>
              <RecipeImg />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    chefInfo: state.chefInfo,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getChef })(ChefDashboard);
