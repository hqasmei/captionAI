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
        href="https://github.com/hqasmei/platoio"
        target="_blank"
        rel="noreferrer"
      >
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 "></div>
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-75 group-hover:blur group-hover:transition group-hover:duration-200"></div>
          <button className="relative flex items-center rounded-full bg-black px-4 py-2 leading-none">
            <span className="flex items-center space-x-3">
              <AiOutlineGithub color="white" size={25} />

              <span className="text-gray-100">Star on Github</span>
            </span>
          </button>
        </div>
      </a>
    </header>
  );
}
