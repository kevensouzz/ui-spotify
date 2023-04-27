import { HomeIcon, Search, Library, BookmarkPlus, Heart, Compass } from "lucide-react";
import MyPLaylist from "./MyPlaylist";

export default function Sidebar() {
  return (
    <aside className="w-60 p-6 max-laptop:w-10 max-laptop:p-5 max-laptop:flex flex-col justify-center">
      <nav className="fixed overflow-hidden">
        <nav className="space-y-4">
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 max-laptop:w-5">
            <HomeIcon size={18} />
            <p className="max-laptop:hidden">Home</p>
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 max-laptop:w-5">
            <Search size={18} />
            <p className="max-laptop:hidden">Search</p>
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 max-laptop:w-5">
            <Library size={18} />
            <p className="max-laptop:hidden">Your Library</p>
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 max-laptop:w-5">
            <Compass size={18} />
            <p className="max-laptop:hidden">Explore</p>
          </a>
        </nav>
        <div className="flex flex-col gap-3 mt-8 text-sm font-semibold">
          <a href="" className="flex gap-3 text-zinc-200 max-laptop:w-5">
            <BookmarkPlus size={18} />
            <p className="max-laptop:hidden">Create Playlist</p>
          </a>
          <a href="" className="flex gap-3 text-zinc-200 max-laptop:w-5">
            <Heart size={18} />
            <p className="max-laptop:hidden">Liked Songs</p>
          </a>
        </div>
        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 max-laptop:invisible">
          <MyPLaylist nome="PHONK ESTRALANDO" />
          <MyPLaylist nome="trap leozin/doka/vino" />
          <MyPLaylist nome="sla qporré essa" />
          <MyPLaylist nome="ryu, THE RUNNEERRR!" />
        </nav>
      </nav>
    </aside>
  )
}