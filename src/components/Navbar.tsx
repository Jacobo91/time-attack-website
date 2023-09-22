"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion } from "framer-motion"




export default function Navbar() {
const [isOpen, setIsOpen] = useState<boolean>(false);


function toggleMenu() {
    setIsOpen((prev) => !prev);
}

return (
    <nav 
        className="relative z-50 sticky top-0 h-20 text-white rounded-md bg-opacity-0 backdrop-blur-lg border border-opacity-0  border-none flex justify-between items-center px-10"
    >
    <Image src={logo} width={50} height={50} alt="logo" />
    <button
        className="sm:hidden grid gap-[5px] h-auto"
        onClick={toggleMenu}>
        <motion.div 
            className="h-[2px] w-[20px] bg-white rounded-lg"
            animate={{ 
                rotate: isOpen ? 45 : 0, 
                originX: 0 
            }}
            transition={{ type:"spring", stiffness: 50 }}
        />
        <motion.div 
            className="h-[2px] w-[20px] bg-white rounded-lg"
            animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.div 
            className="h-[2px] w-[20px] bg-white rounded-lg"
            animate={{ 
                rotate: isOpen ? -45 : 0, 
                originX: 0 
            }}
            transition={{ type:"spring", stiffness: 50 }}
        />
    </button>
    <motion.ul
        className={`absolute top-20 left-0 leading-[3rem] w-screen h-screen bg-opacity-70 backdrop-blur-md backdrop-filter bg-black border-none p-6 overflow-hidden 
        sm:relative sm:visible sm:w-[auto] sm:top-0 sm:bg-transparent`}
        initial={{ opacity: 0 }}
        animate={{ 
            x: isOpen ? ["100%", "0%"] : ["0%", "100%"],
            opacity: isOpen ? 0.8 : 0,
        }}
        transition={{
            type:"tween",
            duration:"0.5"
        }}
    >
        <li>Home</li>
        <li>Gallery</li>
    </motion.ul>
    </nav>
);
}
