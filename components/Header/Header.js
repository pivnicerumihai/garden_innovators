import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <nav className={`bg-primary fixed top-0 left-1/2 z-10 w-11/12 rounded-xl mt-2 transform -translate-x-1/2 font-extrabold`}>
        <div className="container mx-auto flex items-center justify-between flex-wrap px-6 py-1 font-rubik text-2xl text-white ">
          <div className="flex items-center space-x-32">
            <span>Home</span>
            <span>Portfolio</span>
            <span>Services</span>
            <span>Contact</span>
            <span>About</span>
          </div>
          <Image src="/images/logox.png" alt="logo" width={80} height={100} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
