"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Navbar() {
const [open, setOpen] = useState<boolean>(false);

function toggleMenu() {
    setOpen((prev) => !prev);
}

return (
    <nav className="relative z-50 sticky top-0 h-20 text-white rounded-md bg-opacity-0 backdrop-blur-lg border border-opacity-0  border-none flex justify-between items-center px-10">
    <Image src={logo} width={50} height={50} alt="logo" />
    <button
        className="sm:hidden"
        onClick={toggleMenu}>
        Menu
    </button>
    <ul
        className={`absolute top-20 left-0 w-screen bg-opacity-60 backdrop-blur-md backdrop-filter bg-black border-none p-4 flex gap-5 justify-center transform transition-all duration-300 ${
        open
            ? "visible"
            : "invisible"
        } sm:relative sm:visible sm:w-[auto] sm:top-0 sm:bg-transparent`}
    >
        <li>Home</li>
        <li>Gallery</li>
    </ul>
    </nav>
);
}
