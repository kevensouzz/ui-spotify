import Image from "next/image"

export default function Playlist() {
  return (
    <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-1 hover:bg-white/10 ">
      <Image className="w-full" src={"/nevermind.jpg"} alt="capa do album Nevermind de Nirvana" width={104} height={104} />
      <strong className="font-semibold pt-1">nome</strong>
      <span className="text-sm text-zinc-400">usuário</span>
    </a>
  )
}