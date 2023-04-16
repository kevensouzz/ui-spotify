import { Shuffle, SkipBack, PlayIcon, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
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
  )
}