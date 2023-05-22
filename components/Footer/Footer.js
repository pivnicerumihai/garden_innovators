import Image from "next/image";
import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary w-11/12 h-[300px] mt-10 flex flex-row justify-evenly rounded-3xl">
      <div className="rounded-3xl overflow-hidden flex flex-row items-center">
        <Image
          src="/images/big_logo_b.png"
          alt="logo"
          width={250}
          height={100}
        />
      </div>
      <div className="flex flex-col mt-10">
        <p className="text-white text-2xl font-bold mb-2">Contact Us</p>
        <p className="text-white text-sm ">
          22 Sandhills
          <br />
          SM6 8JE London <br /> <b>Name:</b> Ion Tiron Cristian <br />
          <b>Phone:</b> 079 3223 1961 <br />
          <b>Email:</b> contact@elegance-engineered.co.uk
        </p>
        <br />
        <div className="flex flex-row">
          <RiFacebookBoxFill color="#4267B2" size="2em" className="mx-2" />{" "}
          <FaTiktok size="2em" color="white" className="mx-2" />{" "}
          <FaInstagram size="2em" color="#C13584" className="mx-2" />
        </div>
      </div>
      <div className="flex flex-col  mt-10">
        <p className="text-white text-2xl font-bold">Links</p>
        <br />
        <p className="text-white text-sm text-center">
          Home
          <br />
          {/* <br/> Portfolio <br/>  */}
          Contact Us <br />
          About Us{" "}
        </p>
      </div>
      <div className="flex flex-col  mt-10">
        <p className="text-white text-2xl font-bold">Legal Information</p>
        <br />
        <p className="text-white text-sm text-center">
          Terms & Conditions
          <br />
          Privacy Policy
          <br /> Legal Disclaimers <br /> Cookie Policy <br />{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
