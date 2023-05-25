import Image from "next/image";
import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-primary w-full py-8 px-4 mt-10 sm:px-8 lg:px-16">
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 flex items-center justify-center sm:justify-start">
          <Image
            src="/images/big_logo_b.png"
            alt="logo"
            width={250}
            height={100}
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-center sm:text-left">
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
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-center sm:text-left">
          <p className="text-white text-2xl font-bold">Links</p>
          <ul className="flex flex-col items-center sm:items-start mt-4 text-white font-rubik">
            <li className={`cursor-pointer`}><Link href="/">Home</Link></li>
            <li className={`cursor-pointer`}><Link href="/contact">Contact</Link></li>
            <li className={`cursor-pointer`}><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 text-center sm:text-left">
          <p className="text-white text-2xl font-bold">Legal Information</p>
          <p className="text-white text-sm mt-4">
            Terms & Conditions
            <br />
            Privacy Policy
            <br /> Legal Disclaimers <br /> Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
