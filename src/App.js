import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import "./styles.scss";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ChefDashboard from "./components/ChefDashboard";
import CreateRecipe from "./components/CreateRecipe";
import EditProfilePicture from "./components/EditProfilePicture";
import EditAbout from "./components/EditAbout";
import EditInfo from "./components/EditInfo";
import Footer from "./components/Footer";
import GuestDashboard from "./components/GuestDashboard";
import ChefRecipe from "./components/ChefRecipe";

import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/" component={CreateAccount} />
      <Route exact path="/login" component={Login} />
      <Route path="/add-recipe" component={CreateRecipe} />
      <PrivateRoute path="/chefdashboard/:id" component={ChefDashboard} />
      <Route path="/edit-profile-picture/:id" component={EditProfilePicture} />
      <Route path="/edit-about/:id" component={EditAbout} />
      <Route path="/edit-info/:id" component={EditInfo} />
      <Route path="/recipe/:id" component={ChefRecipe} />
      <Route path="/guestdashboard" component={GuestDashboard} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
