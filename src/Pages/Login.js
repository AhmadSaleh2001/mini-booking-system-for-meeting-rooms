import React from "react";
import ShowMsg from "../Helpers/ShowMsg";
import { useState } from "react";
import useMainContext from "../Hooks/useMainContext";
import Redirect from "../Helpers/Redirect";
import { useNavigate } from "react-router-dom";
import getUsers from "../Helpers/getUsers";

function Login() {
  const navigate = useNavigate();
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let { User, SetUser } = useMainContext();
  function handleLogin(e) {
    // console.log(User);
    e.preventDefault();
    let Users = getUsers();
    let Find = -1;
    for (let Idx in Users) {
      if (Users[Idx].email == Email && Users[Idx].password == Password) {
        Find = Idx;
        break;
      }
    }
    if (Find == -1) {
      ShowMsg("error", "Login Failed", "email or password are incorrect");
    } else {
      Redirect("success", "Login Successfully", "", function () {
        SetUser(Find);
        navigate("/");
      });
    }
  }
  return (
    <div className="container mt-3">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
