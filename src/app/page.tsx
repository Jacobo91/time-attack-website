import About from "../components/About"
import styles from "../../styles/banner.module.css"


export default function Home() {
  return (
    <main>
      <section className={styles.banner} >
        <video  className={styles.bannerVideo} src="/short.mp4" autoPlay loop muted></video>
        <h1 className={styles.bannerText}>time attack<br/>
        <span className={styles.bannerSpan} >palmas</span></h1>
      </section>
      <About/>
    </main  >
  )
}
