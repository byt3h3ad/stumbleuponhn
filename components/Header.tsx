import Image from "next/image";
import { useRouter } from "next/router";
import logo from "@/public/next.svg";

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.1] bg-zinc-900 py-4">
      <div className="flex items-center justify-center">
        <div className="flex gap-6">
          <div onClick={() => router.reload()} className="flex items-center space-x-2">
            <Image src={logo} alt={logo} className="h-6 w-6" />
            <span className="inline-block font-bold text-xl">Hacker News</span>
          </div>
        </div>
      </div>
    </header>
  );
}
