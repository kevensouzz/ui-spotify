import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Album from "./components/LatestSongs"
import Playlist from "./components/Playlist"
import Header from "./components/Header"
import Topic from "./components/Topic"

export default function Home() {
  return (
    <div className={
        `min-h-screen mx-auto flex flex-col
      `}>
      <div className={`
        flex flex-1
      `}>
        <Sidebar />

        <main className={`
          flex-1 p-5
        `}>
          <Header />

          <Topic text="Listen Again" />

          <div className={`
            grid grid-cols-3 gap-4
            max-lg:grid-cols-2
            max-[475px]:grid-cols-1
          `}>
            <Album name="Smells Like Teen Spirit" image={"/nevermind.jpg"} alt={"Smells Like Teen Spirit"} artist={"Nirvana"} />
            <Album name="Something In The Way" image={"/nevermind.jpg"} alt={"Something In The Way"} artist={"Nirvana"} />
            <Album name="Loverboy" image={"/loverboy.jpg"} alt={"Loverboy"} artist={"A-Wall"} />
            <Album name="SPIT IN MY FACE!" image={"/spitinmyface.jpg"} alt={"SPIT IN MY FACE!"} artist={"ThxSoMch"} />
            <Album name="Hesitations (Acoustic)" image={"/hesitations.jpeg"} alt={"Hesitations (Acoustic)"} artist={"LRN Slime, CORBAL e Shiloh Dynasty"} />
            <Album name="Notion (Acoustic)" image={"/notionac.jpeg"} alt={"Notion (Acoustic)"} artist={"The Rare Occasions"} />
          </div>

          <Topic text="Made For You" />

          <div className={`
            grid grid-cols-7 gap-4 mb-10
            max-lg:grid-cols-4
            max-sm:grid-cols-3
            max-[450px]:grid-cols-2
          `}>
            <Playlist image={"/neonblade.jpeg"} alt={"phonkhouse"} nome={"phonkhouse"} user={"macelinh201625"} />
            <Playlist image={"/afterdark.jpeg"} alt={"AESTHETICS"} nome={"AESTHETICS"} user={"K1ng4sth3tics"} />
            <Playlist image={"/cha.jpeg"} alt={"aql vibezinha"} nome={"aql vibezinha"} user={"manosemnome123"} />
            <Playlist image={"/limbo.jpeg"} alt={"GYMMM"} nome={"GYMM"} user={"ZyzZ"} />
            <Playlist image={"/bandoleiro.jpeg"} alt={"\")"} nome={"\")"} user={"lilSkay88"} />
            <Playlist image={"/chegadefalardeice.jpeg"} alt={"slowmo"} nome={"slowmo"} user={"artz7"} />
            <Playlist image={"/midnight.jpeg"} alt={"light weight baby!"} nome={"light weight baby!"} user={"mano dos veneno"} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
