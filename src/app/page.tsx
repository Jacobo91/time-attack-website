
import Podium from "../components/Podium"
import styles from "../../styles/banner.module.css"
import Gallery from "@/components/Gallery"
import Image from "next/image"
import nurbur from "../../public/f1.jpg"
import About from "@/components/About"


export default function Home() {


  return (
    <main>
      <section className={styles.banner} >
        <Image  className={styles.bannerImage} src={nurbur} alt="formula one"/>
        <h1 className={styles.bannerText}>time attack<br/>
        <span className={styles.bannerSpan} >palmas</span>
        </h1>
      </section>
      <Podium/>
      <About />
      <Gallery/>
    </main  >
  )
}
