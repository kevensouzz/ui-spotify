import { HomeIcon, Search, Library, BookmarkPlus, Heart, Compass } from "lucide-react";
import MyPLaylist from "./MyPlaylist";

export default function Sidebar() {
  return (
    <aside className={`
      w-48 p-6 my-3
      max-laptop:w-10 max-laptop:p-5
      max-laptop:flex flex-col
      max-md:w-6 max-md:px-3
    `}>

      <nav className={`
        fixed overflow-hidden
      `}>

        <nav className={`
          space-y-4
        `}>

          <a href="" className={`
            flex items-center gap-2
            text-base font-semibold text-zinc-200
            max-laptop:w-5 max-laptop:text-white
          `}>

            <HomeIcon size={20} />
            <p className={`
              max-laptop:hidden
            `}>Home</p>

          </a>

          <a href="" className={`
            flex items-center gap-2
            text-base font-semibold text-zinc-200 
            max-laptop:w-5 max-laptop:text-white
          `}>

            <Search size={20} />
            <p className={`
              max-laptop:hidden
            `}>Search</p>

          </a>

          <a href="" className={`
            flex items-center gap-2
            text-base font-semibold text-zinc-200 
            max-laptop:w-5 max-laptop:text-white
          `}>

            <Compass size={20} />
            <p className={`
              max-laptop:hidden
            `}>Explore</p>

          </a>

        </nav>

        <div className={`
          flex flex-col
          gap-3 mt-8
          text-sm font-semibold
        `}>

          <a href="" className={`
            flex items-center gap-2
            text-base font-semibold text-zinc-200 
            max-laptop:w-5 max-laptop:text-white
          `}>

            <Library size={20} />
            <p className={`
              max-laptop:hidden
            `}>Your Library</p>

          </a>

          <a href="" className={`
            flex items-center gap-2
            text-base font-semibold text-zinc-200 
            max-laptop:w-5 max-laptop:text-white
          `}>

            <BookmarkPlus size={20} />
            <p className={`
              max-laptop:hidden
            `}>Create Playlist</p>

          </a>

          <a href="" className={`
            flex items-center gap-2
            text-base font-semibold text-zinc-200 
            max-laptop:w-5 max-laptop:text-white
          `}>

            <Heart size={20} />
            <p className={`
              max-laptop:hidden
            `}>Liked Songs</p>

          </a>
        </div>

        <nav className={`
          mt-6 pt-6 gap-3
          border-t border-zinc-800
          flex flex-col 
          max-laptop:invisible
        `}>
          <MyPLaylist nome="PHONK ESTRALANDO" />
          <MyPLaylist nome="trap leozin/doka/vino" />
          <MyPLaylist nome="sla qporré essa" />
          <MyPLaylist nome="ryu, THE RUNNEERRR!" />
        </nav>

      </nav>
    </aside>
  )
}