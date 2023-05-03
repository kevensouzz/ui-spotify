"use client"
import { Play } from "@phosphor-icons/react";
import Image from "next/image";

interface albumProps {
  name: string;
  artist: string;
  image: string;
  alt: string
}

export default function Album(prop: albumProps) {
  return (
    <a href="" className={`
      bg-black/50 hover:bg-black/75 
      group rounded max-h-20
      flex items-center gap-2
      overflow-hidden transition-colors
      max-md:gap-1
    `}>
      <Image src={prop.image} alt={prop.alt} width={75} height={75} className={`
        h-full
      `} />
      <div className={`
        flex flex-col pr-1
      `}>
        <strong className={`
          text-sm
          max-sm:text-xs
          max-[425px]:text-exs
        `}>
          {prop.name}</strong>
        <span className={`
          text-xs font-light
          max-sm:text-exs
        `}>
          {prop.artist}</span>
      </div>
      <button className={`
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-green-500 text-black
        ml-auto mr-5
        invisible
        group-hover:visible
        max-md:hidden
        max-[475px]:flex max-[475px]:mr-3
        max-[475px]:w-6 max-[475px]:h-6
        max-[375px]:hidden
      `}>
        <Play size={22} weight="fill" className={`
          max-[475px]:w-4 max-[375px]:h-4
        `} />
      </button>
    </a>
  )
}