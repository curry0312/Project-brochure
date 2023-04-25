import React from "react";
import NavLink from "../components/NavLink";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 z-50 flex items-center px-10 py-8 bg-opacity-black">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-white text-3xl font-Sigmar font-bold">
            WANGGAMES
          </h1>
        </div>
        <div className="md:hidden">
          <IconButton onClick={null}>
            <MenuIcon sx={{ color: "white", fontSize: "1.7rem" }} />
          </IconButton>
        </div>
        <div className="hidden md:flex md:gap-5">
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/faq"}>FAQ</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
