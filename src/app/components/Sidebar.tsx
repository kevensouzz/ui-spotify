import { HomeIcon, Search, Library, BookmarkPlus, Heart, Compass } from "lucide-react";
import MyPLaylist from "./MyPlaylist";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-900 p-6">
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
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Compass size={18} />
          Explore
        </a>
      </nav>

      <div className="flex flex-col gap-3 mt-8 text-sm font-semibold">
        <a href="" className="flex gap-3 text-zinc-200">
          <BookmarkPlus size={18} />
          Create Playlist
        </a>
        <a href="" className="flex gap-3 text-zinc-200">
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