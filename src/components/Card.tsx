
import { CardType } from "@/cards";
import Image from "next/image";

export default function Card ({ card } : {
    card: CardType
}) {
return (
    <div
    key={card.id}
    className="group relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] overflow-hidden bg-neutral-200"
    >
    <div
        style={{
        backgroundImage: `url(${card.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    ></div>
    <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
        {card.title}
        </p>
    </div>
    </div>
);
};