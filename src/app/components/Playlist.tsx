import Image from "next/image"

interface playlistProps {
  image: string;
  alt: string;
  nome: string;
  user: string;
}

export default function Playlist(prop: playlistProps) {
  return (
    <a href="" className={`
      bg-black/50 hover:bg-black/75
      rounded-md p-2 gap-1 
      flex flex-col
    `}>
      <Image className={`
        w-full rounded
      `}
        src={prop.image} alt={prop.alt} width={104} height={104} />
      <strong className={`
        text-xs pt-1
      `}>
        {prop.nome}</strong>
      <span className={`
        text-xs text-zinc-400
      `}>
        {prop.user}</span>
    </a>
  )
}