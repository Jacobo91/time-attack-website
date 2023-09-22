import About from "../components/About"

export default function Home() {
  return (
    <main>
      <header
        role="banner"
        className="h-[60vh] sm:h-[90vh] bg-white bg-[url(https://cdn.wallpapersafari.com/18/19/9plKGb.jpg)] 
        bg-cover bg-center flex justify-center items-center"
      >
      <div>
        <h1 className="text-2xl sm:text-6xl">
          Time Attack Palmas
        </h1>

      </div>
      </header>
      <About/>
    </main  >
  )
}
