import Image from "next/image";
import { PlayIcon } from "lucide-react";

export default function Album() {
  return (
    <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
      <Image src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={75} height={75} />
      <strong>ALBÚM</strong>
      <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayIcon />
      </button>
    </a>
  )
}