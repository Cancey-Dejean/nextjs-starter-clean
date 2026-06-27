import ModeToggle from "@/components/utility/mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2">
      <Link href="/">Logo</Link>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
