import ChevronButtons from "./ChevronButtons";
import User from "./user";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <ChevronButtons />
      <User />
    </header>
  )
}