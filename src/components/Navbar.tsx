"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "../../styles/navbar.module.css"


export default function Navbar() {

const [isOpen, setIsOpen] = useState(false);

function toggleMenu() {
    setIsOpen((prev) => !prev);
}
return (
    <nav 
        className={styles.navbar}
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
    <ul className={`${styles.menu} ${isOpen ? styles.menuOpened : ""}`} >
        <li>
            <Link href="/" onClick={() => setIsOpen(false)} >Inicio</Link>
        </li>
        <li>
            <Link href='/tiempos' onClick={() => setIsOpen(false)}>Tiempos</Link>
        </li>
        <li>
            <Link href='/galeria' onClick={() => setIsOpen(false)}>Galeria</Link>
        </li>
    </ul>
    </nav>
);
}
