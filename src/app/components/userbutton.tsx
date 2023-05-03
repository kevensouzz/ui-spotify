import { User } from "lucide-react";

export default function UserButton() {
  return (
    <a href="" title="profile" className={`
      w-10 h-10
      bg-black/25
      rounded-full
      flex items-center justify-center
      transition-colors hover:bg-black/60
      max-[375px]:w-8 max-[375px]:h-8
      `}>
      <User size={28} className={`
        max-[375px]:w-6 max-[375px]:h-6
      `} />
    </a>
  )
}