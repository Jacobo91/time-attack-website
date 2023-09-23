import { useEffect, useRef, useState } from "react";

export default function useObserver(opciones = {}) {

    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const animationTarget = useRef(null);

    useEffect(() => {
    const element = animationTarget.current;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            setIsIntersecting(entry.isIntersecting)
        });
    }, opciones
    );
    if (element) {
        observer.observe(element);
    }
    }, []);

    return [ isIntersecting, animationTarget  ]
} 