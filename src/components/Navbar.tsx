"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion } from "framer-motion"
import { useEffect } from "react";
import Link from "next/link"


export default function Navbar() {

const [width, setWidth] = useState(0)
const [isOpen, setIsOpen] = useState(false);

function toggleMenu() {
    setIsOpen((prev) => !prev);
}

useEffect(() => {
if (typeof window !== "undefined") {
    setWidth(window.innerWidth);

    if (width > 640) {
    setIsOpen(true);
    } else {
    setIsOpen(false);
    }
    }
}, [width]);

return (
    <nav 
        className="font-bold sticky w-full top-0 z-50 h-20 text-white rounded-md bg-opacity-0 backdrop-blur-[4px] sm:backdrop-blur-[10px] border border-opacity-0  border-none flex justify-between items-center px-10"
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
            className="h-[2px] w-[20px] bg-white rounded-xl"
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
        className={`absolute top-20 left-0 leading-[3rem] w-screen h-screen bg-opacity-70 backdrop-blur-md backdrop-filter bg-black border-none p-6
        sm:block sm:w-auto sm:h-auto sm:flex sm:gap-5 sm:top-0 sm:relative sm:bg-transparent`}
        initial={{ opacity: 0 }}
        animate={{ 
            y: isOpen ? ["-100%", "0%"] : ["0%", "0%"],
            opacity: isOpen ? 0.8 : 0,
        }}
        transition={{
            type:"tween",
            duration:"0.5"
        }}
    >
        <li>
            <Link href="/" onClick={() => setIsOpen(false)} >Inicio</Link>
        </li>
        <li>
            <Link href='/tiempos' onClick={() => setIsOpen(false)}>Tiempos</Link>
        </li>
        <li>
            <Link href='/galeria' onClick={() => setIsOpen(false)}>Galeria</Link>
        </li>
    </motion.ul>
    </nav>
);
}
