'use client'
import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'

export default function SecondArticle() {
const targetRef = useRef(null)
const { scrollYProgress } = useScroll({
target: targetRef
})
const x = useTransform(scrollYProgress, [1, 0], ["-100%", "10%"])
return (
    <article 
    ref={targetRef}
    className='relative mt-20 h-[40vh]'
    >
    <div
        className='sticky top-20 overflow-hidden'
    >
        <motion.div style={{x}} >
            <h2
            className="pb-4 text-2xl"
            >
            Second Article
            </h2>
            <p
            className='w-80'
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae consequuntur nulla voluptatum saepe reprehenderit adipisci ad asperiores impedit eaque!
            </p>
        </motion.div>
    </div>
    </article>
    );
}

