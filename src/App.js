import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import "./styles.scss";
// import Home from "./components/Home";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ChefDashboard from "./components/ChefDashboard";
import CreateRecipe from "./components/CreateRecipe";
import EditProfilePicture from "./components/EditProfilePicture";
import EditAbout from "./components/EditAbout";
import EditInfo from "./components/EditInfo";

import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CreateAccount} />
      <Route exact path="/login" component={Login} />
      <Route path="/add-recipe" component={CreateRecipe} />
      {/*   <Home /> */}
      <PrivateRoute path="/chefdashboard/:id" component={ChefDashboard} />
      <Route path="/edit-profile-picture/" component={EditProfilePicture} />
      <Route path="/edit-about/" component={EditAbout} />
      <Route path="/edit-info/" component={EditInfo} />
    </div>
  );
}

export default App;
