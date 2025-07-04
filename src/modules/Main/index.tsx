import BoxComponent from "@/src/components/BoxComponent";
import Head from "next/head";
import Image from "next/image";
import Cotillions from "./Cotillion";

const MainPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }

          .font-vibes {
            font-family: 'Great Vibes', cursive;
          }
        `}</style>
      </Head>
      <div className="h-screen w-screen flex items-center flex-col overflow-y-auto min-h-screen">
        <BoxComponent
          styles="bg-[url('/cover.jpg')] bg-center bg-no-repeat flex flex-col justify-end  md:min-h-[600px] min-h-[225px]
          bg-contain sm:bg-cover"
        />

        <BoxComponent>
          <p className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed font-poppins text-gray-800">
            🌿✨ <strong>You’re invited to a magical evening!</strong> ✨🌿
            <br />
            <br />
            Join us as we celebrate the enchanting{" "}
            <span className="font-vibes text-3xl text-pink-700">
              Yshee’s 18th Birthday
            </span>{" "}
            — a night to remember filled with <em>joy</em>, <em>laughter</em>,
            and a sprinkle of <em>magic</em>!<br />
            <br />
            Let’s make memories as
            <span className="tracking-widest font-medium block">
              Y S H E E &nbsp; T U R N S <br/> E I G H T E E N
            </span>{" "}
            💃🏼
          </p>
        </BoxComponent>
        <BoxComponent>
          <p className="text-center text-base sm:text-lg md:text-xl font-light text-gray-800 leading-relaxed ">
            👗{" "}
            <span className="text-2xl font-medium">Dress Code: Fancy-ish!</span>{" "}
            <br />
            <br />
            <span className="block text">
              <strong>Ladies —</strong> Wear a dress that makes you feel
              absolutely fabulous 💫
            </span>
            <span className="block mt-2">
              <strong>Gents —</strong> Polo shirts or long sleeves (especially
              for our dashing <em>18 Roses</em> 🌹)
            </span>
            <br />
            Let’s keep it <em>cool</em>, <em>classy</em>, and ready to dance the
            night away! 🎶
          </p>
        </BoxComponent>
        {/* <BoxComponent
          styles="
          min-h-[500px]
          lg:min-h-[800px]
  "
        >
          <div className="relative w-full h-[600px] sm:h-[800px]">
            <Image
              src="/images/yshee-2.jpg"
              alt="Yshee 18"
              fill
              className="object-contain" // or use "object-cover" if you want it to fill and crop
              priority
            />
          </div>

</BoxComponent> */}
        {/* Photo Album ========================================== */}
        <BoxComponent styles="flex flex-col items-center gap-6 py-6 bg-[#F4E7E1]">
          <div className="flex justify-center w-full">
            <Image
              src="/Yshee-2.jpg"
              alt="Yshee 18"
              width={550}
              height={450}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
          {/* Row 1: 2 Images */}
          <div className="flex flex-col gap-4 md:flex-row">
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
          </div>

          {/* Row 2: Bigger Center Image */}
          <div className="flex justify-center w-full">
            <Image
              src="/11.jpg"
              alt="Yshee 18"
              width={550}
              height={450}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <Image
              src="/images/yshee-6.jpg"
              alt="Yshee 18"
              width={280}
              height={180}
              className="rounded-md shadow-md"
              priority
            />
            <Image
              src="/images/yshee-7.jpg"
              alt="Yshee 18"
              width={280}
              height={180}
              className="rounded-md shadow-md"
              priority
            />
          </div>
        </BoxComponent>
        <BoxComponent styles="flex flex-col items-center gap-6 py-6 bg-[#F4E7E1] bg-[url('/grass2.png')] bg-no-repeat bg-bottom bg-contain">
          <p className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed font-poppins text-gray-800">
            🌿✨ <strong>SEE YOU AT</strong> ✨🌿
          </p>
          <div className="flex flex-col gap-6 md:gap-8 items-center">
            <div className="flex justify-center w-full">
              <Image
                src="/2.jpg"
                alt="Yshee 18"
                width={550}
                height={450}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>

            {/* Image Section */}
            <div className="flex flex-wrap justify-center gap-4">
             
              <Image
                src="/images/address-2.jpg"
                alt="Yshee 18"
                width={500}
                height={450}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>

            {/* Details Section */}
            <div className="text-center px-4 max-w-xl">
              <p className="text-lg font-semibold text-gray-800">
                📍 <span className="font-bold">Del Rosario Private Resort</span>
              </p>
              <p className="text-gray-600">
                Bypass Road, Gulod Maginao, San Rafael, Bulacan
              </p>
              <p className="mt-2 text-base font-medium text-gray-700">
                📅 August 10 • 6:00 PM
              </p>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <video
              className="rounded-xl shadow-lg"
              width={500}
              height={440}
              controls
              autoPlay
              muted
              loop
            >
              <source src="/Video.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-xl sm:text-2xl leading-relaxed text-center text-gray-800 max-w-3xl mx-auto mt-10 px-4">
            Your presence is the greatest gift of all. But if you’d like to
            share a little more,
            <span className="font-semibold text-pink-700">
              {" "}
              cash gifts are truly appreciated. 💌
            </span>
          </p>

          <Cotillions />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfoPYi5bUUrssRjXyxYYTlxKKV81hOqGyU3t4ZXPAhSXJoYVQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-pink-700 border border-pink-700 px-5 py-2 rounded-md hover:bg-pink-700 hover:text-white transition-colors duration-200 w-[300px] text-center block"
          >
            Join Us! (Click to RSVP)
          </a>

          <p className="text-center text-3xl sm:text-4xl font-serif italic text-gray-800 mt-20 mb-12 px-4 animate-fade-in">
            Let’s make it a night to remember{" "}
            <span className="text-pink-600">✨</span>
          </p>
        </BoxComponent>
      </div>
    </>
  );
};

export default MainPage;
