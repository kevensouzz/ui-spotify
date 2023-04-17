import Image from "next/image"

export default function Playlist(prop: { image: string ; alt: string ; nome: string; user: string;}) {
  return (
    <a href="#" className="bg-white/5 rounded-md p-2 flex flex-col gap-1 hover:bg-white/10 ">
      <Image className="w-full rounded" src={prop.image} alt={prop.alt} width={104} height={104} />
      <strong className="text-xs pt-1">{prop.nome}</strong>
      <span className="text-xs text-zinc-400">{prop.user}</span>
    </a>
  )
}