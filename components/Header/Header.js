import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className={`bg-primary fixed top-0 left-1/2 z-10 w-11/12 rounded-xl mt-2 transform -translate-x-1/2 font-extrabold `}>
        <div className="container mx-auto flex items-center justify-evenly flex-wrap px-6 py-1 font-rubik text-2xl text-white ">
          <ul className="flex items-center space-x-32">
           <li> <Link href='/'>Home</Link></li>
           <li> <Link href='/services_prices'>Services & Prices</Link></li>
           <li><Link href='/contact'>Contact</Link></li> 
           <li> <Link href='/about'>About</Link></li>
          </ul>
          <div className="-mb-12">
            <Image src="/images/logo_g.png" alt="logo" width={150} height={100} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
