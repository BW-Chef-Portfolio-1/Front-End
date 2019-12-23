import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    let name = e.target.name;
    setCredentials({ ...credentials, [name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    console.log(credentials.username);
    console.log(credentials.password);
    console.log(credentials);
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/portfolio");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="outter-login">
      <div className="login-page">
        <form onSubmit={login}>
          {/* <div className="login-title">
            <h3>
              Log In To <span>Chef</span>Port<span>.</span>
            </h3>
          </div> */}

          <h2>
            Log In To <span>Chef</span>Port<span>.</span>
          </h2>
          <div className="login-title">
            <h3>Log In Information</h3>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <div>
            <button>Log in</button>
          </div>
          <div className="color-link">
            <Link
              style={{
                textDecoration: "none",
                color: "#FE0707",
                fontSize: "14px",
                fontWeight: "bold"
              }}
              to="/"
            >
              Not signed up yet?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
