import Image from "next/image"

export default function Logo() {
  return (
    <a href="" className={`
      flex gap-1 items-center
    `}>
      <Image src={"/logo/spotify-32x32.png"} alt={"Spotify's logo"} width={32} height={32} className={`
        max-[375px]:w-7 max-[375px]:h-7
      `} />
      <h1 className={`
        font-semibold text-2xl
        max-[375px]:text-xl
      `}>SPOTIFY</h1>
    </a>
  )
}