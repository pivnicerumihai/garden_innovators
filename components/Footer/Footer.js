import Image from "next/image";
import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-primary w-full py-8 px-4 mt-10 sm:px-8 lg:px-16 flex flex-col">
      <div className="flex flex-wrap items-start">
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8 flex items-center justify-center sm:justify-start sm:hidden md:hidden lg:flex">
          <Image
            src="/images/big_logo_b.png"
            alt="logo"
            width={250}
            height={100}
            className="hidden sm:hidden md:block"

          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mt-8 text-center sm:text-left">
   <p className="text-white text-2xl font-bold mb-2">Contact Us</p>
          <p className="text-white text-sm ">
            22 Sandhills
            <br />
            SM6 8JE London <br /> <b>Name:</b> Ion Tiron Cristian <br />
            <b>Phone:</b> 079 3223 1961 <br />
            <b>Email:</b> contact@elegance-engineered.co.uk
          </p>
          <div className="flex justify-center sm:justify-start mt-4">
            <RiFacebookBoxFill color="#4267B2" size="2em" className="mx-2" />
            <FaTiktok size="2em" color="white" className="mx-2" />
            <FaInstagram size="2em" color="#C13584" className="mx-2" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mt-8 text-center sm:text-left">
     <p className="text-white text-2xl font-bold">Links</p>
          <ul className="flex flex-col items-center sm:items-start mt-4 text-white font-rubik">
            <li className={`cursor-pointer hover:underline`}><Link href="/">Home</Link></li>
            <li className={`cursor-pointer hover:underline`}><Link href="/contact">Contact</Link></li>
            <li className={`cursor-pointer hover:underline`}><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mt-8 text-center sm:text-left">
   <p className="text-white text-2xl font-bold">Legal Information</p>
   <ul className="flex flex-col items-center sm:items-start mt-4 text-white font-rubik">
       
   <li className={`cursor-pointer hover:underline`}><Link href="/legal/terms">Terms & Conditions</Link></li>
   <li className={`cursor-pointer hover:underline`}><Link href="/legal/privacy">Privacy Policy</Link></li>
  <li className={`cursor-pointer hover:underline`}><Link href="/legal/privacy">Legal Disclaimer</Link></li>
  <li className={`cursor-pointer hover:underline`}><Link href="/legal/cookies">Cookies Policy</Link></li>
  </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
