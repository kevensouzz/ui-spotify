import Logo from "./Logo";
import UserButton from "./userbutton";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <Logo />
      <UserButton />
    </header>
  )
}