"use client";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cards } from "@/cards";
import Card from "../components/Card";
import { CardType } from "@/cards";

export default function Gallery() {
const targetRef = useRef(null);
const { scrollYProgress } = useScroll({
target: targetRef,
});

const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

return (
<section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
    <motion.div style={{ x }} className="flex gap-4">
        {cards.map((card: CardType) => {
        return <Card card={card} key={card.id} />;
        })}
    <div className="z-10 p-4 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] border border-white grid bg-neutral-900">
    <h3 className="text-2xl font-bold mb-4 leading-tight">Titulo aqui</h3>
    <p className="mb-2">
        <span className="text-xl font-bold">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Repellat sunt minus vel quisquam labore explicabo reiciendis debitis? Temporibus, vitae impedit.
    </p>
    <p className="mb-2">
        <span className="text-xl font-bold">L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quasi, unde necessitatibus beatae ipsum eum.
    </p>
    </div>
    </motion.div>
    </div>
</section>
);
}
