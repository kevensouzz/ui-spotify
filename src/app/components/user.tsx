import { UserIcon } from "lucide-react";

export default function User() {
  return (
    <a href="#" title="profile" className="w-10 h-10 bg-black/25 rounded-full flex items-center justify-center">
      <UserIcon size={28} />
    </a>
  )
}