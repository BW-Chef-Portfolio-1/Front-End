import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  function signOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("reload")
    window.location.reload()
  };
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("token")) { setLoggedIn(true) } else { setLoggedIn(false) }
  }, [])


  return (
    <div>
      <nav className={loggedIn ? "logged" : "out"}>
        < h1 >
          <Link to="/"><span>Chef</span>Port<span>.</span></Link>
        </h1 >
        <div>
          <div>
            <Link to="/">Profile</Link>
          </div>
          <div>
            <Link to="/">Recipes</Link>
          </div>
          <div>
            <Link to="/">Create Recipe</Link>
          </div>
        </div>
        <div className="sign-in-nav-button">
          <Link to="/login" onClick={() => { signOut() }}>Sign Out</Link>
        </div>
      </nav >

      <nav className={ !loggedIn ? "logged" : "out"}>
        <h1>
          <Link to="/"><span>Chef</span>Port<span>.</span></Link>
        </h1>
        <div>
          <Link to="/">Recipes</Link>
        </div>
        <div className="sign-in-nav-button">
          <Link to="/login">Sign In</Link>
        </div>
        <div className="sign-in-nav-button">
          <Link to="/">Sign Up</Link>
        </div>
      </nav>

    </div>
  );
}

export default Nav;

