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
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
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
