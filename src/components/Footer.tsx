import Image from 'next/image';
import logo from "../../public/logo.png"
import Link from 'next/link';
import styles from "../../styles/footer.module.css"

export default function Footer() {

    return (
    <footer className={styles.wrapper}>
        <section>
        <Link
            className={styles.instagram}
            href="https://www.instagram.com/timeattackpalmas/" target='_blank'>
                <i className="fa-brands fa-instagram text-6xl"></i>
        </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur facere aspernatur soluta inventore. Necessitatibus officia illo sit in vel dolorem magnam, quo unde similique veritatis, error commodi ratione. Nesciunt.</p>
        </section>
        <section
            role="contact"
            className={styles.address}
        >
            <address>
                <p>Medellín,</p>
                <p>Antioquia, Colombia</p>
            </address>
        </section>
    </footer>
    );
}
