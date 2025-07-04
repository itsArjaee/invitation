import { useState } from "react";
import Image from "next/image";

export default function Cotillions() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Initial Images */}
        {/* <div className="flex flex-col gap-4 md:flex-row">
            <Image
            src="/images/yshee-3.jpg"
            alt="Yshee 18"
            width={280}
            height={180}
            className="rounded-md shadow-md"
            priority
            />
            <Image
            src="/images/yshee-4.jpg"
            alt="Yshee 18"
            width={280}
            height={180}
            className="rounded-md shadow-md"
            priority
            />
        </div> */}

      {/* Toggle Button */}
    

      {/* Collapsible Section with Animation */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showMore ? "max-h-[3400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 mt-4 md:flex-row">
          <Image
            src="/1.jpg"
            alt="Yshee 18"
            width={280}
            height={180}
            className="rounded-md shadow-md"
          />
          <Image
            src="/images/4.jpg"
            alt="Yshee 18"
            width={280}
            height={180}
            className="rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-col gap-4 mt-4 md:flex-row">
          <Image
            src="/5.jpg"
            alt="Yshee 18"
            width={280}
            height={180}
            className="rounded-md shadow-md"
          />
          {/* update */}
          <Image
            src="/images/7.jpg"
            alt="Yshee 18"
            width={280}
            height={180}
            className="rounded-md shadow-md"
          />
        </div>

        <div className="flex flex-col gap-4 mt-4 md:flex-row">
            <Image
            src="/images/3.jpg"
            alt="Yshee 18"
            width={280}
            height={180}
            className="rounded-md shadow-md"
          />
          <Image
            src="/images/6.jpg"
            alt="Yshee 18"
            width={280}
            height={180}
            className="rounded-md shadow-md"
          />
        
        </div>
  
      </div>
        <button
        onClick={() => setShowMore(!showMore)}
      className="text-lg bg-pink-700 cursor-pointer text-white border border-pink-700 px-5 py-2 rounded-md hover:bg-white hover:text-pink-700 transition-colors duration-200 w-[300px]"
      >
        {showMore ? "Hide" : "Cotillions (Click to Show)"}
      </button>
    </div>
  );
}
