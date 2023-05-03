import { User } from "lucide-react";

export default function UserButton() {
  return (
    <a href="" title="profile" className={`
      w-10 h-10
      bg-black
      rounded-full
      flex items-center justify-center
      max-md:w-9 max-md:h-9
      max-[425px]:w-9 max-[425px]:h-9
      max-[375px]:w-8 max-[375px]:h-8
      `}>
      <User size={28} className={`
        max-[425px]:w-7 max-[425px]:h-7
        max-[375px]:w-6 max-[375px]:h-6
      `} />
    </a>
  )
}