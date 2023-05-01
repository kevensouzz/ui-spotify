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
      max-md:p-1
      max-sm:px-3
      max-[375px]:px-2
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
            max-[425px]:text-xs
          `}>
            Smells Like Teen Spirit
          </strong>

          <span className={`
            text-xs text-zinc-400
            max-[425px]:text-zinc-500
          `}>
            Nirvana
          </span>

        </div>
      </div>

      <div className={`
        flex flex-col items-center
        max-sm: mr-3
        max-[425px]:mr-0
      `}>

        <div className={`
          flex items-center gap-2
          max-[320px]:gap-1
        `}>

          <Shuffle size={18} className={`
              text-zinc-200
              max-[375px]:hidden
            `} />
          <SkipBack size={18} className={`
              text-zinc-200
            `}
          />

          <button className={`
            w-6 h-6
            flex items-center justify-center
            rounded-full
            bg-white text-black
            max-[425px]:hidden
          `}>
            <Play size={18} weight="fill" />
          </button>

          <Play size={18} weight="fill" className={`
            hidden
            max-[425px]:block
          `} />

          <SkipForward size={18} className={`
              text-zinc-200
            `} />

          <Repeat size={18} className={`
              text-zinc-200
              max-[375px]:hidden
            `}
          />

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
        max-md:gap-2
        max-sm:hidden
      `}>

        <Mic2 size={18} />
        <LayoutList size={18} />
        <Laptop2 size={18} />
        <div className={`
          flex items-center gap-2
        `}>

          <Volume2 size={18} />
          <div className={`
            rounded-full w-20 bg-zinc-600
          `}>
            <div className={`
              bg-zinc-200 w-20 h-1 rounded-full
            `}></div>
          </div>
        </div>

        <Maximize2 size={18} />
      </div>
    </footer>
  )
}