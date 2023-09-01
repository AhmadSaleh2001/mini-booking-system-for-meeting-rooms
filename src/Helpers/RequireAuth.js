import { useLocation, Outlet, Navigate } from "react-router-dom";
import React from "react";
import useMainContext from "../Hooks/useMainContext";
function RequireAuth() {
  let { User } = useMainContext();
  //   console.log("Status: ", User);
  let Loc = useLocation();
  return User != -1 ? <Outlet /> : <Navigate to={"/login"} />;
}

export default RequireAuth;
