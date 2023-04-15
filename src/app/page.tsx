import { Home as HomeIcon, Search, Library, BookmarkPlus, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
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
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 1</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 2</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 3</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 4</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 5</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 6</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 7</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 8</a>
            <a href="" className="text-sm text-zinc-400 px-2 hover:text-zinc-100">PLAYLIST 9</a>
          </nav>

        </aside>

        <main className="flex-1 p-6">
          main
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
