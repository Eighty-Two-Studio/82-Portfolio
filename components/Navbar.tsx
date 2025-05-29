import Image from "next/image";
import Download from "./Download";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 md:p-10 w-full md:w-[800px] mx-auto motion-opacity-in-0 motion-preset-expand motion-blur-in-xl motion-duration-1200">
        <Image src="/full-logo.svg" width="300" height="0" alt="82 Studio Logo" className="w-[120px] md:w-[140px]"/>

        <Download />
    </div>
  )
}
