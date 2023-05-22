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
      <div className="pt-28 w-10/12 mx-auto">
        <div className="relative rounded-xl overflow-hidden">
          <Image src="/images/hero_final.png" alt="logo" width={1440} height={768} />
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-opacity-50 backdrop-filter backdrop-blur-xs p-1 rounded-xl">
              <p className="font-freehand text-5xl  text-white text-center">
                Transforming Outdoors <br /> Crafting Paradises
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  mt-20 w-4/5">
        <ServiceCard
          title={"Services"}
          listArray={[
            "Fence & Decking Services",
            "Artificial Grass",
            "Porcelain Patio",
            "Victorian Pathways",
            "Painting",
          ]}
        />

        <ServiceCard
          title={"Prices"}
          listArray={[
            "Item One: £25",
            "Item Two: 35£",
            "Item Three: £45",
            "Item Four: £25",
            "Item Five: 35£",
            "Item Six: £45",
            "Item Seven: £25",
            "Item Eight: 35£",
            "Item Nine: £45",
          ]}
        />
      </div>
      <GallerySlide images={images} 
      description={<> Below is a curated showcase of our diverse gardening services. Here, you'll find a rich tapestry of our work, encompassing everything from elegant fences and decks to stunning patios, charming pathways, and vibrant painting transformations. As you browse through, witness how we've transformed ordinary outdoor spaces into extraordinary garden paradises, embodying our commitment to exceptional craftsmanship, innovative design, and attention to detail.</>} 
      title={'Our Work'}
      />
      <Footer />
    </div>
  );
}
