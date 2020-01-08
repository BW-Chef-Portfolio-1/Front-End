import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  function signOut() {
    localStorage.removeItem("token");
    window.location.reload();
  }
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn) {
    return (
      <nav>
        <h1>
          <Link to="/">
            <span>Chef</span>Port<span>.</span>
          </Link>
        </h1>
        <div>
          <div>
            <Link to={`/chefdashboard/${localStorage.getItem("userId")}`}>
              Profile
            </Link>
          </div>
          <div>
            <Link to="/guestdashboard">Recipes</Link>
          </div>
          <div>
            <Link to="/add-recipe">Create Recipe</Link>
          </div>
        </div>
        <div className="sign-in-nav-button">
          <Link
            to="/login"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </Link>
        </div>
      </nav>
    );
  }
  if (!loggedIn)
    return (
      <nav>
        <h1>
          <Link to="/">
            <span>Chef</span>Port<span>.</span>
          </Link>
        </h1>
        <div>
          <div>
            <Link to="/">Profile</Link>
          </div>
          <div>
            <Link to="/guestdashboard">Recipes</Link>
          </div>
          <div>
            <Link to="/">Create Recipe</Link>
          </div>
        </div>
        <div className="sign-in-nav-button">
          <Link to="/login">Sign In</Link>
        </div>
        <div className="sign-in-nav-button">
          <Link to="/">Sign Up</Link>
        </div>
      </nav>
    );
};

export default Nav;
