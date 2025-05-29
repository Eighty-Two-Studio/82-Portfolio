import { HiDownload } from "react-icons/hi"
import { PiArrowBendDownLeftBold } from "react-icons/pi"
import { Caveat } from "next/font/google"
import Link from "next/link"

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export default function Download() {
  return (
    <div className="relative">
        <Link href="/Letter.pdf" download className="flex gap-2 items-center bg-[var(--primary)] text-[var(--background)] cursor-none px-6 py-3 rounded-full md:hover:bg-[var(--secondary)] md:hover:scale-110 duration-500">
            <span>Download</span>
            <HiDownload />
        </Link>

        <div className="absolute top-[60px] left-5 md:left-20 w-full flex items-center md:gap-2 motion-preset-seesaw motion-duration-1000">
            <PiArrowBendDownLeftBold size={20} className="rotate-[100deg] md:rotate-[70deg]"/>
            <h1 className={`${caveat.className} antialiased font-bold text-2xl`}>Letterhead</h1>
        </div>
    </div>
  )
}
