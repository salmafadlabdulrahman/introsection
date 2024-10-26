import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 py-6 ">
      <div className="flex-items justify-between">
        <div className="flex-items gap-[4em] justify-between lg:justify-normal w-full">
          <Image
            src={"/assets/images/logo.svg"}
            alt="logo"
            width={90}
            height={90}
            className="lg:w-[80px] mt-2"
          />
          <div className="lg:hidden">
            <Image
              src={"/assets/images/icon-menu.svg"}
              alt="menu icon"
              width={30}
              height={30}
            />
          </div>

          <ul className="hidden lg:flex items-center gap-4">
            <li className="flex-items gap-1">
              Features
              <Image
                src={"/assets/images/icon-arrow-down.svg"}
                alt="arrow down"
                width={10}
                height={10}
                className="mt-1"
              />
            </li>
            <li className="flex-items gap-1">
              Company
              <Image
                src={"/assets/images/icon-arrow-down.svg"}
                alt="arrow down"
                width={10}
                height={10}
                className="mt-1"
              />
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>

        <div className="lg:flex-items gap-8 hidden">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
