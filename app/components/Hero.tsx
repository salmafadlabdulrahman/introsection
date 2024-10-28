import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="max-w-[500px] px-4 py-6 m-auto md:flex-items justify-between md:pl-[2.5em] md:max-w-[1000px] lg:max-w-[1200px] lg:mt-[3.5em]">
        <Image
          src={"/assets/images/image-hero-mobile.png"}
          alt="hero image"
          width={500}
          height={500}
          className="w-full md:hidden"
        />
        <div className="hidden md:block order-2 ">
          <Image
            src={"/assets/images/image-hero-desktop.png"}
            alt="hero image"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="text-center mt-5 md:text-left">
          <h4 className="font-bold text-[1.9em] md:text-[5em] md:leading-[1em] md:max-w-[550px]">
            Make
            <br className="hidden md:block" /> remote work
          </h4>
          <p className="text-mediumGray text-[1.1em] leading-[1.6em] max-w-[500px] mt-9 md:pr-3">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black text-white py-4 px-8 rounded-2xl mt-7 font-bold text-[1.1em]">
            Learn more
          </button>

          <div className="flex-items mt-[3em] lg:mt-[6em] justify-center flex-wrap gap-5 md:justify-start md:w-[60%] lg:w-[100%]">
            <Image
              src="/assets/images/client-databiz.svg"
              width={100}
              height={100}
              alt="databiz logo"
              className="border "
            />
            <Image
              src="/assets/images/client-audiophile.svg"
              width={70}
              height={70}
              alt="databiz logo"
            />
            <Image
              src="/assets/images/client-meet.svg"
              width={100}
              height={100}
              alt="databiz logo"
            />
            <Image
              src="/assets/images/client-maker.svg"
              width={100}
              height={100}
              alt="databiz logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
