import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Header from "../components/Header/Header";
import Image from "next/image";
import GallerySlide from "@/components/GallerySlide/GallerySlide";
import Footer from "@/components/Footer/Footer";

const images = [
  {
    url: "/images/gallery_1.png",
    alt: "Image 1",
  },
  {
    url: "/images/gallery_2.png",
    alt: "Image 2",
  },
  {
    url: "/images/gallery_3.png",
    alt: "Image 3",
  },
  {
    url: "/images/gallery_4.png",
    alt: "Image 4",
  },
  {
    url: "/images/gallery_5.png",
    alt: "Image 5",
  },
];

export default function Home() {
  

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="pt-28 w-10/12 mx-auto">
        <div className="relative">
          <Image src="/images/hero.png" alt="logo" width={1920} height={1080} />
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-opacity-50 backdrop-filter backdrop-blur-xs p-4 rounded-lg">
              <p className="font-freehand text-5xl text-white text-center">
                Transforming Outdoors <br /> Crafting Paradises
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-20">
        <ServiceCard
          title={"Our Services"}
          listArray={[
            "Garden design and planning",
            "Installation of new plants, shrubs, and trees",
            "Lawn care and maintenance, including mowing and fertilizing",
            "Soil preparation and conditioning for flower beds and gardens",
            "Garden bed construction and maintenance",
            "Irrigation system installation and maintenance",
            "Tree pruning and trimming",
            "Seasonal cleanup and debris removal",
            "Hardscaping, including patio and walkway installation",
            "Fence and gate installation and repair",
            "Outdoor lighting installation and maintenance",
            "Sustainable landscaping practices, such as rainwater harvesting and composting",
          ]}
        />

        <ServiceCard
          title={"Orientative Prices"}
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
      <GallerySlide images={images} />
      <Footer />
    </div>
  );
}
