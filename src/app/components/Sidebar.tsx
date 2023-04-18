import { HomeIcon, Search, Library, BookmarkPlus, Heart } from "lucide-react";
import MyPLaylist from "./MyPlaylist";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-4">
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <HomeIcon size={18} />
          Home
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Search size={18} />
          Search
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Library size={18} />
          Your Library
        </a>
      </nav>

      <div className="flex flex-col gap-3 mt-8 text-sm font-semibold text-zinc-200">
        <a href="" className="flex gap-3">
          <BookmarkPlus size={18} />
          Create Playlist
        </a>
        <a href="" className="flex gap-3">
          <Heart size={18} />
          Liked Songs
        </a>
      </div>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <MyPLaylist nome="PHONK ESTRALANDO" />
        <MyPLaylist nome="trap leozin/doka/vino" />
        <MyPLaylist nome="sla qporré essa" />
      </nav>

    </aside>
  )
}