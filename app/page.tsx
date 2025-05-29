import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center bg-white text-black motion-opacity-in-0 motion-preset-expand motion-blur-in-xl motion-duration-1200">
      <div className="max-w-4xl mx-auto text-center">
          <Image src="/full-logo.svg" width="300" height="0" alt="82 Studio Logo" className="mb-5 mx-auto"/>
          <p className="text-xl mb-8 text-gray-600">
            Crafting digital experiences that leave lasting impressions
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all">
              Our Work
            </button>
            <button className="border border-black hover:bg-black hover:text-white px-8 py-3 rounded-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>
    </div>
  );
}
