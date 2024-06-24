'use client'
import logo from "../public/images/logo.png";
import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Close the menu when a link is clicked
    const handleLinkClick = () => {
      setMenuOpen(false);
    };

    // Attach click event listeners to all links inside the mobile menu
    const links = document.querySelectorAll(".mobile-menu-link");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-50 bg-white transform transition-transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } duration-300 ease-in-out`}
      >
        {/* Logo and Closing Icon for Mobile View */}
        <div className="p-4 flex justify-between items-center">
          {/* Logo on the left */}
          <Link href="/">
            <div className="cursor-pointer  items-center duration-200">
              <Image
                src={logo}
                alt="Logo"
                width={74}
                height={100}
                className="h-120 w-120  items-center justify-center"
              />
            </div>
          </Link>
          {/* Closing Icon centered with padding and top margin */}
          <div className="flex items-center">
            <button onClick={toggleMenu} className="px-2 mt-1">
              {/* Replace with your closing icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <NavLinks mobile />
      </div>
      <button
        className={`md:hidden sm:hidden ${
          menuOpen ? "hidden" : "block"
        } fixed top-7 right-7 z-50`}
        onClick={toggleMenu}
      >
        {/* Replace with your hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  );
};

export default MobileMenu;
