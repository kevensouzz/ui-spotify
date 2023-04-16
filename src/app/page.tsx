import { ChevronLeft, ChevronRight, PlayIcon, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react"
import Image from "next/image"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-5">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 w-10 h-10 flex items-center justify-center pr-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 w-10 h-10 flex items-center justify-center pl-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-5">Good Night</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
              <strong>ALBÚM</strong>
              <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-8">Made for Keven Souza</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">

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

      <Footer />
    </div>
  )
}
