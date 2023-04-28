import React from "react";
import NavLink from "../components/NavLink";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed left-0 right-0 z-50 flex items-center px-10 py-8 bg-opacity-black">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-white text-3xl font-Sigmar font-bold">
            WANGGAMES
          </h1>
        </div>
        <div className="hidden md:flex md:gap-5">
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/faq"}>FAQ</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>
        </div>

        {/*md: show*/}
        <div
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <IconButton onClick={null}>
            <MenuIcon sx={{ color: "white", fontSize: "2rem" }} />
          </IconButton>
        </div>
        <ResponsiveMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      </div>
    </nav>
  );
}

export default Navbar;
