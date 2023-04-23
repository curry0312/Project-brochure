import React from "react";
import { Link } from "react-router-dom";

function NavLink({ to, Icon, children }) {
  return (
    <Link to={to} className="text-white text-xl font-Poltawski flex items-center">
      <div>{Icon}</div>
      <div>{children}</div>
    </Link>
  );
}

export default NavLink;
