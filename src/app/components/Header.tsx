import Logo from "./Logo";
import MobileButtons from "./MobileButtons";
import UserButton from "./userbutton";

export default function Header() {
  return (
    <header className={`
    flex items-center justify-between
    `}>
      <Logo />
      <div className={`
        flex items-center gap-4
        max-[425px]:gap-3
        max-[375px]:gap-2
      `}>
        <MobileButtons />
        <UserButton />
      </div>
    </header>
  )
}