'use client'
import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'

export default function FirstArticle() {
const targetRef = useRef(null)
const { scrollYProgress } = useScroll({
target: targetRef
})
const x = useTransform(scrollYProgress, [1, 0], ["10%", "100%"])
return (
    <article 
    ref={targetRef}
    className='relative h-[105vh]'
    >
    <div
        className='sticky top-80 overflow-hidden'
    >
        <motion.div style={{x}} >
            <h2
            className="pb-4 text-2xl"
            >
            First Article
            </h2>
            <p
            className='w-80'
            >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae consectetur fuga, quas enim consequatur, incidunt ipsa deleniti blanditiis suscipit quos optio quis earum distinctio hic iusto repellat alias mollitia nostrum exercitationem magnam sequi. Autem exercitationem earum ipsum sequi sit dolores.
            </p>
        </motion.div>
    </div>
    </article>
    );
}

