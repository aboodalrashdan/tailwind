import Link from "next/link";
import Image from "next/image";

export function HeadSection() {
  return (
    <div className="relative flex items-center justify-center flex-col gap-2 w-full">
      <Image 
      className="w-full h-auto"
      src="/image/hello.png"
      alt="weoijfw"
      width={450}
      height={315}
      priority
      />
      
      <div className="absolute flex items-center justify-center flex-col gap-2 w-[18.75rem] py-2 bg-gray-50 bg-opacity-80 rounded text-center  sm:w-[25rem] sm:px-[4.375rem] sm:py-12 sm:gap-6 md:w-[45.625rem] md:px-[5.625rem] md:py-16 md:gap-4">
        <h2 className="text-[1.25rem] font-light leading-6 sm:text-[1.875rem] sm:leading-8 md:text-[2.5rem] md:leading-10">
          🌱
          <br />
          The nature candle
        </h2>
        <p className="font-[Helvetica] text-[0.625rem] sm:text-[0.75rem] md:text-[1.125rem]">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>
        <Link href="/products">
          <button type="button" className="inline-flex appearance-none items-center justify-center select-none relative align-middle outline-offset-2 leading-4 font-medium text-[0.625rem] py-[0.438rem] px-5 mt-4 text-white bg-greenline rounded-md whitespace-nowrap outline-transparent outline-2 sm:text-[0.875rem] sm:px-[1.875rem] sm:py-[0.625rem] sm:mt-[0.625rem] md:leading-6 md:text-[1.25rem] md:px-[3.125rem] md:py-[0.875rem] md:mt-[2.5rem]">
            Discover our collection
          </button>
        </Link>
      </div>
    </div>
  );
}
