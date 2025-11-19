"use client";

import React, { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import { Poppins, Dancing_Script } from "next/font/google";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"; // 👈 Auth hooks

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
});

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession(); // ✅ Check session

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`${poppins.className} w-full flex justify-between px-2 md:px-10 py-4 bg-gray-100 text-gray-800 h-16 shadow-sm fixed top-0 z-50 flex-wrap`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <BiMessageRoundedDetail className="h-8 w-8 font-bold text-gray-700" />
        <p
          className={`${dancing.className} text-xl sm:text-2xl font-semibold text-gray-900 hidden md:inline-block`}
        >
          Welcome to
        </p>
        <p
          className={`${dancing.className} text-xl sm:text-2xl font-semibold text-gray-900`}
        >
          My Blog
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex justify-end items-center gap-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/profile" className="hover:text-blue-600">
          See Profile
        </Link>
        <Link href="/addblog" className="hover:text-blue-600">
          Add Blog
        </Link>
        <Link href="contact" className="hover:text-blue-600">
          Contact
        </Link>
        {/* <a href="/contact" className="hover:text-blue-600">Contact Me</a> */}

        {/* 👇 Auth Section */}
        {!session ? (
          <button
            onClick={() => signIn("google")}
            className="border border-blue-600 text-blue-700 px-4 py-2 rounded-2xl cursor-pointer
                        hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] 
                        transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Login / Signup
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <image
              src={session.user.image}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700">{session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="border border-blue-600 text-blue-700 px-4 py-2 rounded-2xl cursor-pointer
                          hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] 
                          transition-all duration-300 ease-in-out transform hover:scale-105"
              >            
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center gap-4 md:hidden animate-slideDown py-4">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/profile" onClick={closeMenu}>
            Profile
          </Link>
          <Link href="/addblog" onClick={closeMenu}>
            Add Blog
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="border border-blue-600 text-blue-700 px-3 py-2 rounded-2xl hover:bg-blue-50"
            >
              Login / Signup
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className="text-red-600 border border-red-600 px-3 py-2 rounded-2xl hover:bg-red-50"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NewNavbar;
