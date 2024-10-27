import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="max-w-[500px] px-4 py-6 m-auto md:flex-items justify-between md:pl-[2.5em] md:max-w-[1000px] lg:max-w-[1200px]">
        <Image
          src={"/assets/images/image-hero-mobile.png"}
          alt="hero image"
          width={500}
          height={500}
          className="w-full md:hidden"
        />
        <Image
          src={"/assets/images/image-hero-desktop.png"}
          alt="hero image"
          width={400}
          height={400}
          className="hidden md:block order-2 lg:w-[500px]"
        />

        <div className="text-center mt-5 md:text-left">
          <h4 className="font-bold text-[1.9em] md:text-[5em] md:leading-[1em] md:max-w-[550px]">
            Make
            <br className="hidden md:block" /> remote work
          </h4>
          <p className="text-mediumGray text-[1.1em] leading-[1.6em] max-w-[500px] mt-9">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black text-white py-4 px-8 rounded-2xl mt-7 font-bold text-[1.1em]">
            Learn more
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
