import ChevronButtons from "./ChevronButtons";
import UserButton from "./userbutton";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <ChevronButtons />
      <UserButton />
    </header>
  )
}