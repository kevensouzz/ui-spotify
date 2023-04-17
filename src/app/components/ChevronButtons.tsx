import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ChevronButtons() {
  return (
    <div className="flex items-center gap-3">
      <button className="rounded-full bg-black/40 w-10 h-10 flex items-center justify-center pr-1 opacity-50 cursor-default">
        <ChevronLeft />
      </button>

      <button className="rounded-full bg-black/40 w-10 h-10 flex items-center justify-center pl-1 opacity-50 cursor-default">
        <ChevronRight />
      </button>
    </div>
  )
}