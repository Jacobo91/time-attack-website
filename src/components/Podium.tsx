import styles from "../../styles/podium.module.css"
import Image from "next/image"
import medallaOro from "../../public/medallaOro.png"
import medallaPlata from "../../public/medallaPlata.png"
import medallaBronce from "../../public/medallaBronce.png"

export default function Podium() {
  return(
    <section
    className={styles.cardsWrapper}
    >

      <article
        className={`${styles.winnerCard} ${styles.card1} ${styles.badge}`}
      >

        <div className={styles.innerBadgeCard} >
          <Image
              src={medallaOro}
              width={60}
              height={60}
              alt="medalla de oro al ganador"
              className={styles.badgeImage}
            />
            <div className={styles.badgeText}>
              <h2 className="text-xl">Jacobo Velasquez</h2>
            </div>
        </div>

      </article>

      <article
        className={`${styles.card} ${styles.card2} ${styles.badge}`}
      >
        <div className={styles.innerBadgeCard} >
          <Image
            src={medallaPlata}
            width={50}
            height={50}
            alt="medalla al segundo lugar"
            className={styles.badgeImage}
          />
          <div className={styles.badgeText}>
            <h2 className="text-xl">Jacobo Velasquez</h2>
          </div>
        </div>
      </article>

      <article
        className={`${styles.card} ${styles.card3} ${styles.badge}`}
      >
        <div className={styles.innerBadgeCard} >
          <Image
            src={medallaBronce}
            width={50}
            height={50}
            alt="medalla al tercer lugar"
            className={styles.badgeImage}
          />
          <div className={styles.badgeText}>
            <h2 className="text-xl">Jacobo Velasquez</h2>
          </div>
        </div>
      </article>

    </section>
  )
}