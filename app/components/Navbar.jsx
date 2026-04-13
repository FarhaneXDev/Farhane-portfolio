"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <div className="flex items-center px-4 sm:px-6 pt-4 md:px-[10%] justify-between w-full">
      {/* LOGO */}
      <div>
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Farhane <span className="text-[#25a244]">X</span>{" "}
          </h1>
        </Link>
      </div>

      {/* Desktop Nav Menu */}
      <ul className="hidden text-white md:flex gap-4 backdrop-blur-md rounded-full px-6 py-2">
        <li>
          <a
            className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244]"
            href=""
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244]"
            href=""
          >
            A Propos
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244]"
            href=""
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244]"
            href=""
          >
            Projets
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244]"
            href=""
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Available Button */}
      <div className="flex gap-4 items-center justify-center">
        <button className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25a244] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25a244] shadow-[0_0_8px_#25a244]"></span>
          </span>
          <span className="text-white text-xs md:text-lg font-semibold">
            Disponible
          </span>
        </button>
        {/* Mobile Menu */}
        <div onClick={openMenu} className="xs:flex md:hidden">
          <Menu className="cursor-pointer shrink-0 text-white" />
        </div>
      </div>

      {/* Mobile Side Bar */}
      <ul
        ref={sideMenuRef}
        className="flex text-white flex-col md:hidden z-20 py-24 px-6 fixed gap-6 right-0 top-0 bottom-0 w-64 max-w-xs backdrop-blur-xl bg-white/10 border-l border-white/10 transition duration-500 translate-x-full"
        style={{ height: "100dvh" }}
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <X className="cursor-pointer hover:rotate-90 transition duration-300" />
        </div>
        <li>
          <a
            className="block px-4 py-3 rounded-xl hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244] transition-all duration-300"
            onClick={closeMenu}
            href=""
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            className="block px-4 py-3 rounded-xl hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244] transition-all duration-300"
            onClick={closeMenu}
            href=""
          >
            À propos
          </a>
        </li>
        <li>
          <a
            className="block px-4 py-3 rounded-xl hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244] transition-all duration-300"
            onClick={closeMenu}
            href=""
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="block px-4 py-3 rounded-xl hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244] transition-all duration-300"
            onClick={closeMenu}
            href=""
          >
            Projets
          </a>
        </li>
        <li>
          <a
            className="block px-4 py-3 rounded-xl hover:bg-[#25a244]/10 hover:shadow-[0_0_12px_#25a244] transition-all duration-300"
            onClick={closeMenu}
            href=""
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
