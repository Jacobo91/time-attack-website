import Gallery from "@/components/Gallery"
import About from "@/components/about/About"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <header
        className="h-screen bg-white bg-[url(https://cdn.wallpapersafari.com/18/19/9plKGb.jpg)] bg-cover bg-center"
      >
      </header>
      <About/>
      <Gallery/>
      <Footer/>
    </main  >
  )
}
