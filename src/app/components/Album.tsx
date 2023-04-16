"use client"
import { Play } from "@phosphor-icons/react";
import Image from "next/image";

export default function Album() {
  return (
    <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
      <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
      <strong>ALBÚM</strong>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play size={20} weight="fill" />
      </button>
    </a>
  )
}