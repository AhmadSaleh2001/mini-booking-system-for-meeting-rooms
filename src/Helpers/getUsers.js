import React from "react";
function getUsers() {
  return JSON.parse(localStorage.getItem("users"));
}

export default getUsers;
