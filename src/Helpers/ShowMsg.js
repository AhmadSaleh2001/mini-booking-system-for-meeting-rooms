import React from "react";
import Swal from "sweetalert2";
function ShowMsg(icon, title, text) {
  Swal.fire({
    icon,
    title,
    text,
  });
}

export default ShowMsg;
