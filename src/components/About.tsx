"use client";
import styles from "../../styles/about.module.css";
import { useEffect, useRef, useState } from "react";

export default function About() {

const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
const animationTarget = useRef(null);

useEffect(() => {
const element = animationTarget.current;
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        setIsIntersecting(entry.isIntersecting)
    });
},  {
        threshold: 0.8,
    }
);
if (element) {
    observer.observe(element);
}
}, []);

return (
    <section ref={animationTarget} role="about" className={styles.wrapper}>
        <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
        >
        <path
            d="M 0,400 C 0,400 0,200 0,200 C 50.34077636551014,157.2064582617657 100.68155273102028,114.41291652353144 175,136 C 249.31844726897972,157.58708347646856 347.6145654414291,243.55479216763996 413,261 C 478.3854345585709,278.44520783236004 510.8601855032633,227.36791480590864 583,193 C 655.1398144967367,158.63208519409136 766.9446925455171,140.97354860872554 845,155 C 923.0553074544829,169.02645139127446 967.3610443146683,214.73789075918927 1021,243 C 1074.6389556853317,271.26210924081073 1137.611130195809,282.0748883545173 1209,272 C 1280.388869804191,261.9251116454827 1360.1944349020955,230.96255582274134 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#181818"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
        ></path>
        </svg>
        <article className={`${styles.info} ${isIntersecting ? styles.animationOn : ""}`}>
        <h2 className={styles.title}>Quienes Somos ?</h2>
        <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis autem
            aspernatur consectetur molestias amet, corrupti nam commodi quae
            facere facilis ratione aliquam harum obcaecati pariatur non placeat.
            Ipsam quos, tempore culpa officiis quod inventore recusandae beatae
            ducimus reprehenderit enim excepturi aliquam a eligendi facilis ut.
        </p>
        </article>
        <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
        >
        <path
            d="M 0,400 C 0,400 0,200 0,200 C 71.37978645066275,209.03663475699557 142.7595729013255,218.07326951399116 198,229 C 253.2404270986745,239.92673048600884 292.3414948453608,252.7435567010309 345,266 C 397.6585051546392,279.2564432989691 463.8744477172313,292.9525036818851 526,272 C 588.1255522827687,251.04749631811487 646.1607142857142,195.44642857142858 716,164 C 785.8392857142858,132.55357142857142 867.4826951399117,125.26178203240059 926,146 C 984.5173048600883,166.7382179675994 1019.9085051546392,215.50644329896906 1068,226 C 1116.0914948453608,236.49355670103094 1176.8832842415316,208.7124447717231 1241,198 C 1305.1167157584684,187.2875552282769 1372.5583578792343,193.64377761413846 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#181818"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        </svg>
    </section>
    );
}
