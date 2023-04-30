import Image from "next/image"

export default function Logo() {
  return (
    <a href="" className={`
      flex gap-1
    `}>
      <Image src={"/logo/spotify-32x32.png"} alt={"Spotify's logo"} width={32} height={32} />
      <h1 className="font-semibold text-2xl">SPOTIFY</h1>
    </a>
  )
}