import React from "react";
import { NavLink } from "react-router-dom";

const Copyright = () => {
  return (
    <p>
      M88 is committed to supporting{" "}
      <NavLink to="/responsible-gaming">
        <strong>Responsible Gaming</strong>
      </NavLink>
    </p>
  );
};

export default Copyright;
