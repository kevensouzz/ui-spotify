import { User } from "lucide-react";

export default function UserButton() {
  return (
    <a href="#" title="profile" className="w-10 h-10 bg-black/25 rounded-full flex items-center justify-center">
      <User size={28} />
    </a>
  )
}