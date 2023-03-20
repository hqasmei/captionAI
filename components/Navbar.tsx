import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 border-stone-400 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2 items-center">
        <Image
          alt="header text"
          src="/logo.png"
          className="sm:w-14 sm:h-14 w-9 h-9"
          width={36}
          height={36}
        />
        <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight text-white hover:text-white/50">
          CaptionAI
        </h1>
      </Link>
      <a
        className="relative overflow-hidden rounded-full bg-black px-20 sm:px-24 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
        href="https://github.com/hqasmei/captionAI"
        target="_blank"
        rel="noreferrer"
      >
        <span className="absolute inset-px z-10 grid place-items-center rounded-full bg-black bg-gradient-to-t from-neutral-800 text-neutral-400">
          <div className="flex flex-row space-x-2 items-center">
            <AiOutlineGithub color="white" size={25} />
            <span className="text-gray-100">Star on Github</span>
          </div>
        </span>
        <span
          aria-hidden
          className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
        />
      </a>
    </header>
  );
}
