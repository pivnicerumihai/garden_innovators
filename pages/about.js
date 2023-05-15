import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function About(){
    return(
        <div className="flex flex-col items-center ">
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 w-3/4">
                <h1 className="text-3xl font-bold text-accent p-2 text-center mt-40">About Us</h1>
                <div className="flex flex-row justify-evenly pt-16">
                    <p className=" text-base text-accent p-10">Welcome to Elegance Engineered, your premier choice for professional gardening services. As a team of dedicated experts, we are passionate about transforming outdoor spaces and bringing our clients' visions to life.<br/><br/>

Our mission has always been to provide top-tier landscaping solutions while promoting sustainability and beauty. Our team possesses a diverse set of skills, including fence & decking, artificial grass installation, porcelain patio design, Victorian pathway construction, and painting. With these specialized capabilities, we are uniquely equipped to handle a broad range of garden designs and transformations.</p>
<Image src="/images/gallery_2.png" alt="logo" width={550} height={100} />
            
                </div>
                <p className=" text-base text-accent p-10">At Elegance Engineered, we believe in providing exceptional service, superior craftsmanship, and innovative design solutions. Whether you're looking to create a tranquil retreat, a space for entertaining, or a practical outdoor area, we promise to exceed your expectations.<br/><br/>    

We understand that every garden is unique, which is why we offer bespoke services tailored to meet your specific needs and preferences. We treat every project, no matter how large or small, with the same level of care and attention to detail. </p>

                <p className=" text-base text-accent px-10">We invite you to explore our website and learn more about the services we offer. Feel free to reach out to us with any questions or to schedule a consultation. We look forward to making your dream garden a reality. </p>
                </div>  
                <Footer/>
        </div>
    )
}