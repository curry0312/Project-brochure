import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function ResponsiveMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={
        isMenuOpen === true
          ? "h-screen transition-height duration-300 fixed inset-0 bg-opacity-black flex justify-center items-center"
          : "h-0 transition-height duration-300 overflow-hidden fixed inset-0 bg-opacity-black flex justify-center items-center"
      }
    >
      <div
        className="absolute top-3 right-3 cursor-pointer rounded-full hover:bg-gray-900"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <CloseIcon sx={{ color: "white", fontSize: "3rem" }} />
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to={"/"}
          className="text-white font-Sigmar text-3xl hover:text-gray-300"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          HOME
        </Link>
        <Link
          to={"/faq"}
          className="text-white font-Sigmar text-3xl hover:text-gray-300"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          FAQ
        </Link>
        <Link
          to={"/contact"}
          className="text-white font-Sigmar text-3xl hover:text-gray-300"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
