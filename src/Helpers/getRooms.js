import React from "react";
function getRooms() {
  return JSON.parse(localStorage.getItem("rooms"));
}

export default getRooms;
