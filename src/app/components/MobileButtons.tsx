'use client'
import { Screencast } from "@phosphor-icons/react";
import { Search } from "lucide-react";

export default function () {
  return (
    <div className={`
      hidden max-md:flex items-center gap-4
      max-[425px]:gap-3
      max-[375px]:gap-2
    `}>
      <a href="" title="search">
        <Search size={26} className={`
          max-[375px]:w-6 max-[375px]:h-6
        `} />
      </a>

      <a href="" title="conect to a device">
        <Screencast size={28} className={`
          max-[375px]:w-6 max-[375px]:h-6
        `} />
      </a>
    </div>
  )
}