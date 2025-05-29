import Navbar from "@/components/Navbar"
import { PiStarFourFill } from "react-icons/pi"
import { FlipWords } from "@/components/FlipWords"
import { FollowerPointer } from "@/components/Pointer";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google"

const instrument = Instrument_Serif({
  weight: ["400"],
  variable: "--font-caveat",
  subsets: ["latin"],
});

export default function Home() {
  const words = ["websites", "apps", "systems", "tools"]

  return (
    <FollowerPointer className="overflow-hidden">
    <div className="h-[100dvh] flex flex-col items-center">
      <Navbar />
      <div className="relative flex flex-col items-center justify-center mb-20 h-full motion-delay-500 motion-blur-in-xl motion-duration-1200">
        {/* <div className="bg-[var(--secondary)] text-[var(--background)] font-medium px-4 py-2 rounded-full flex items-center gap-2 drop-shadow-lg drop-shadow-black/30">
          Available for work
        </div> */}
        <div className={`${instrument.className} text-5xl md:text-9xl w-full text-center mb-5 md:mb-10`}>
          <h1 className="motion-delay-500 motion-opacity-in-0 motion-translate-y-in-150">Designing <FlipWords words={words} className="font-bold"/></h1>
          <h1 className="motion-delay-700 motion-opacity-in-0 motion-translate-y-in-150">you won't forget</h1>
        </div>

        <Image src="/banner.jpg" width="600" height="0" alt="" unoptimized className="w-[250px] md:w-[600px] h-[50px] md:h-[100px] object-cover rounded-full drop-shadow-lg md:drop-shadow-xl drop-shadow-black/30 mb-5 md:mb-10 motion-delay-[900ms] motion-opacity-in-0 motion-translate-y-in-150" />
        <p className="w-[70dvw] md:text-xl md:w-[500px] text-center motion-delay-[1100ms] motion-opacity-in-0 motion-translate-y-in-150">We are Eighty Two Studio - a web and app development team focused on creating sleek, high-performing digital experiences for brands that want to stand out.</p>
      {/* <PiStarFourFill size={60} className="my-10 text-[var(--secondary)]"/> */}
      </div>
    </div>
    </FollowerPointer>
  );
}
