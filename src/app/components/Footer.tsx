"use client"
import { Play } from "@phosphor-icons/react";
import { Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={`
      bg-zinc-950 px-5 py-1
      flex items-center justify-between
      fixed bottom-0 left-0 right-0
      max-lg:px-2
      max-sm:p-1
    `}>

      <div className={`
        flex items-center gap-2
        max-sm:gap-1
      `}>

        <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={36} height={36}
        className={`max-md:w-7 h-7`} />

        <div className={`
          flex flex-col
        `}>

          <strong className={`
            font-normal
            max-lg:text-sm
            max-sm:text-xs
          `}>Smells Like Teen Spirit</strong>
          <span className={`
            text-xs text-zinc-400
            max-sm:text-zinc-500
          `}>Nirvana</span>

        </div>
      </div>

      <div className={`
        flex flex-col items-center
      `}>

        <div className={`
          flex items-center gap-2
          max-sm:gap-1
        `}>

          <Shuffle size={18} className={`
            text-zinc-200
            max-sm: w-4 h-4
          `} />
          <SkipBack size={18} className={`
            text-zinc-200
            max-sm: w-4 h-4
          `} />
          <button className={`
            w-6 h-6
            max-sm:w-5 max-sm:h-5
            flex items-center justify-center
            rounded-full
            bg-white text-black
          `}>
            <Play size={18} weight="fill" className={`
              max-sm: w-4 h-4
            `} />
          </button>
          <SkipForward size={18} className={`
            text-zinc-200
            max-sm: w-4 h-4
          `} />
          <Repeat size={18} className={`
            text-zinc-200
            max-sm: w-4 h-4
          `} />

        </div>

        <div className={`
          flex items-center gap-2
          max-lg:hidden
        `}>

          <span className={`
            text-xs text-zinc-400
          `}>0:44</span>
          <div className={`
            rounded-full w-80 bg-zinc-600
          `}>
            <div className={`
              bg-zinc-200 w-12 h-1 rounded-full
            `}></div>
          </div>
          <span className={`
            text-xs text-zinc-400
          `}>5:01</span>

        </div>
      </div>

      <div className={`
        flex items-center gap-3
        max-sm:gap-1
      `}>

        <Mic2 size={18} className={`
          max-sm: w-4 h-4
        `}/>
        <LayoutList size={18} className={`
          max-sm: w-4 h-4
        `}/>
        <Laptop2 size={18} className={`
          max-sm: w-4 h-4
        `}/>
        <div className={`
          flex items-center gap-2
          max-sm:gap-1
        `}>

          <Volume2 size={18} className={`
            max-sm: w-4 h-4
          `}/>
          <div className={`
            rounded-full w-20 bg-zinc-600
            max-sm:w-12
          `}>
            <div className={`
              bg-zinc-200 w-20 h-1 rounded-full
              max-sm:w-12
            `}></div>
          </div>
        </div>

        <Maximize2 size={18} className={`
          max-sm: w-4 h-4
        `}/>
      </div>
    </footer>
  )
}