import React from "react";
import Swal from "sweetalert2";
function Redirect(icon, title, text, cb) {
  Swal.fire({
    icon,
    title,
    text,
  }).then(function () {
    cb();
  });
}

export default Redirect;
