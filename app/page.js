import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Header from "../components/Header/Header";
import Image from "next/image";
import GallerySlide from "@/components/GallerySlide/GallerySlide";
import Footer from "@/components/Footer/Footer";

const images = [
  {
    url: "/images/gallery_1_1.svg",
    alt: "Image 1",
  },
  {
    url: "/images/gallery_2.svg",
    alt: "Image 2",
  },
  {
    url: "/images/gallery_3_2.svg",
    alt: "Image 3",
  },
  {
    url: "/images/gallery_4.svg",
    alt: "Image 4",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="pt-28 w-full sm:w-10/12 mx-auto">
        <div className="relative overflow-hidden rounded-lg">
          <Image src="/images/hero_final.png" alt="logo" width={1440} height={768} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-opacity-50 backdrop-filter backdrop-blur-xs p-1 rounded-xl">
              <p className="font-freehand lg:text-4xl  text-white text-center">
              Welcome to our gardening services<br /> We bring your gardening dreams to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="services py-20">
        <div className="container mx-auto px-4 sm:px-0 grid gap-4 sm:gap-20 grid-cols-1 sm:grid-cols-2">
          <ServiceCard 
            title={'Services'}
            items={[
              "Fence & Decking Services",
              "Artificial Grass",
              "Porcelain Patio",
              "Victorian Pathways",
              "Painting"
            ]}
          />
          <ServiceCard 
            title={'Prices'}
            items={[
              "Item One: £25",
              "Item Two: £35",
              "Item Three: £45",
              "Item Four: £25",
              "Item Five: £35",
              "Item Six: £45",
              "Item Seven: £25",
              "Item Eight: £35",
              "Item Nine: £45"
            ]}
          />
        </div>
      </section>
      <GallerySlide 
        images={images} 
        description={<> Below is a curated showcase of our diverse gardening services. Here, you'll find a rich tapestry of our work, encompassing everything from elegant fences and decks to stunning patios, charming pathways, and vibrant painting transformations. As you browse through, witness how we've transformed ordinary outdoor spaces into extraordinary garden paradises, embodying our commitment to exceptional craftsmanship, innovative design, and attention to detail.</>} 
        title={'Our Work'}
      />
      <Footer />
    </div>
  );
}
