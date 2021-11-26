import React from "react";
import Logo from "../assets/logo kecil di pojok kiri-01.png";

function Header() {
  return (
    <header className="hidden relative w-full bg-primary py-4 px-44 lg:block">
      <nav className="flex justify-between items-center text-white font-serif">
        <a href="#hero" className="w-1/6">
          <img src={Logo} />
        </a>
        <ul className="flex w-5/12 justify-between">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>/</li>
          <li>
            <a href="#contact">How To Order</a>
          </li>
          <li>/</li>
          <li>
            <a href="#category">Category</a>
          </li>
          <li>/</li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
