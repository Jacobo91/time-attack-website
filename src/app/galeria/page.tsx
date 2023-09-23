import { cards } from "../../cards";
import Image from "next/image";
import styles from "../../../styles/galeria.module.css"; 

export default function Galeria() {
return (
<section className={styles.galleryContainer}>
    {cards.map((card) => {
    return (
        <div key={card.id} className={styles.imageContainer}>
        <Image
            src={card.url}
            alt={card.title}
            width={400}
            height={400}
            className={styles.image}
        />
        <div className={styles.caption}>{card.title}</div>
        </div>
    );
    })}
</section>
);
}
