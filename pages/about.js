import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-36 text-accent">
        <section className="pt-28 px-5 md:px-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-accent text-center">About Us</h1>
          <div className="text-center text-lg">
           
            <p className="mb-8">
              We are a team dedicated to transforming our clients' homes and gardens, always prioritizing their visions and needs. Our services range from fence and decking installations, artificial grass applications, porcelain patio setups, Victorian pathway designs, to intricate painting projects. We're proud to say that we've brought many gardening dreams to life!
            </p>
            <p className="mb-8">
              What sets us apart is our commitment to exceptional craftsmanship, innovative design, and attention to detail. We believe that an outdoor space can be both functional and aesthetic, and our mission is to create gardens that are a testament to that. We invite you to explore our work and look forward to the possibility of making your gardening dreams a reality.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center">
            <div className="m-2">
              <Image src="/images/before_after/before-1.jpeg" alt="Our Work 1" width={400} height={200} />
            </div>
            <div className="m-2">
              <Image src="/images/before_after/after-1.jpeg" alt="Our Work 2" width={400} height={200} />
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
