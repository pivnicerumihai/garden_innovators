import Image from "next/image";
import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import {FaTiktok} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

function Footer() {

    return(
        <footer className="bg-primary w-11/12 h-[300px] mt-10 flex flex-row items-center justify-evenly">
            <Image src="/images/logox.png" alt="logo" width={250} height={100} />
            <div className="flex flex-col  justify-center">
                <p className="text-white text-2xl font-bold mb-2">Contact Us</p>
                <p className="text-white text-sm ">123 Main Street
                Anytown,<br/> USA 12345 <br/> <b>Name:</b> John Doe <br/>
                <b>Phone:</b> +1 (555) 123-4567 <br/>
                <b>Email:</b> john.doe@example.com</p>
                <br/>
                <div className="flex flex-row">
                <RiFacebookBoxFill color="#4267B2" size="2em" className="mx-2"/> <FaTiktok size="2em" color="white" className="mx-2"/> <FaInstagram size="2em" color="#C13584" className="mx-2"/>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-2xl font-bold">Links</p>
                    <br/>
                    <p className="text-white text-sm text-center">Home
                <br/> Portfolio <br/> Contact Us <br/>
                About Us </p>
                
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-2xl font-bold">Legal Information</p>
                    <br/>
                    <p className="text-white text-sm text-center">Terms & Conditions<br/>Privacy Policy
                <br/> Legal Disclaimers <br/> Cookie Policy <br/> </p>
                    </div>
            </footer>
    )

}

export default Footer;