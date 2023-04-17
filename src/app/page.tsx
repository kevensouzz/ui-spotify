import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import ChevronButtons from "./components/ChevronButtons"
import Album from "./components/Album"
import Playlist from "./components/Playlist"


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-5">
          <ChevronButtons />

          <h1 className="font-semibold text-3xl mt-5">Last Songs You Heard</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Album name="Smells Like Teen Spirit" image={"/nevermind.jpg"} alt={"Smells Like Teen Spirit"} artist={"Nirvana"} />
            <Album name="Something In The Way" image={"/nevermind.jpg"} alt={"Something In The Way"} artist={"Nirvana"} />
            <Album name="Loverboy" image={"/loverboy.jpg"} alt={"Loverboy"} artist={"A-Wall"} />
            <Album name="SPIT IN MY FACE!" image={"/spitinmyface.jpg"} alt={"SPIT IN MY FACE!"} artist={"ThxSoMch"} />
            <Album name="Hesitations (Acoustic)" image={"/hesitations.jpeg"} alt={"Hesitations (Acoustic)"} artist={"LRN Slime, CORBAL e Shiloh Dynasty"} />
            <Album name="Notion (Acoustic)" image={"/notionac.jpeg"} alt={"Notion (Acoustic)"} artist={"The Rare Occasions"} />
          </div>

          <h2 className="font-semibold text-2xl mt-8">Made For You</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
