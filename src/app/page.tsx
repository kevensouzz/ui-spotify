import { Laptop2, LayoutList, Maximize2, Mic2 } from "lucide-react"
import { Volume2 } from "lucide-react"
import { Home as HomeIcon, Search, Library, BookmarkPlus, Heart, ChevronLeft, ChevronRight, PlayIcon, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon size={18} />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search size={18} />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library size={18} />
              Your Library
            </a>
          </nav>

          <div className="flex flex-col gap-3 mt-8 text-sm font-semibold text-zinc-200">
            <a href="" className="flex gap-3">
              <BookmarkPlus size={18} />
              Create Playlist
            </a>
            <a href="" className="flex gap-3">
              <Heart size={18} />
              Liked Songs
            </a>
          </div>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 1</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 2</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 3</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 4</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 5</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 6</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 7</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 8</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 9</a>
          </nav>

        </aside>

        <main className="flex-1 p-5">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-5">Good Night</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" target="_blank" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="#" target="_blank" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="#" target="_blank" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="#" target="_blank" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="#" target="_blank" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="#" target="_blank" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-8">Made for Keven Souza</h2>

          <div className="grid grid-cols-7 gap-4 mt-4">

            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10 ">
              <Image className="w-full" src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={104} height={104} />
              <strong className="font-semibold pt-1">TÍTULO</strong>
              <span className="text-sm text-zinc-400">artístas</span>
            </a>

            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10 ">
              <Image className="w-full" src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={104} height={104} />
              <strong className="font-semibold pt-1">TÍTULO</strong>
              <span className="text-sm text-zinc-400">artístas</span>
            </a>

            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10 ">
              <Image className="w-full" src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={104} height={104} />
              <strong className="font-semibold pt-1">TÍTULO</strong>
              <span className="text-sm text-zinc-400">artístas</span>
            </a>

            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10 ">
              <Image className="w-full" src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={104} height={104} />
              <strong className="font-semibold pt-1">TÍTULO</strong>
              <span className="text-sm text-zinc-400">artístas</span>
            </a>

            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10 ">
              <Image className="w-full" src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={104} height={104} />
              <strong className="font-semibold pt-1">TÍTULO</strong>
              <span className="text-sm text-zinc-400">artístas</span>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 px-5 py-1 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={36} height={36} />
          <div className="flex flex-col">
            <strong className="font-normal">Smells Like Teen Spirit</strong>
            <span className="text-xs text-zinc-400">Nirvana</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Shuffle size={18} className="text-zinc-200" />
            <SkipBack size={18} className="text-zinc-200" />
            <button className="w-6 h-6 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <PlayIcon />
            </button>
            <SkipForward size={18} className="text-zinc-200" />
            <Repeat size={18} className="text-zinc-200" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:44</span>
            <div className="rounded-full w-80 bg-zinc-600">
              <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">5:01</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mic2 size={18} />
          <LayoutList size={18} />
          <Laptop2 size={18} />
          <div className="flex items-center gap-2">
            <Volume2 size={18} />
            <div className="rounded-full w-20 bg-zinc-600">
              <div className="bg-zinc-200 w-20 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={18} />
        </div>
      </footer>
    </div>
  )
}
