import Footer from "@/components/Footer/Footer";
import Header from "../components/Header/Header";
import GallerySlide from "@/components/GallerySlide/GallerySlide";
import { useState } from "react";

const images_1 = [{
  url: "/images/portfolio_fence_1.png",
  alt:'fence_1'
},{
  url: "/images/portfolio_fence_2.png",
  alt:'fence_2'
},{
  url: "/images/portfolio_fence_3.png",
  alt:'fence_3'
},{
  url: "/images/portfolio_fence_4.png",
  alt:'fence_4'
},];
const images_2 = [{
  url: "/images/portfolio_tiles_1.png",
  alt:'tiles_1'
},{
  url: "/images/portfolio_tiles_2.png",
  alt:'tiles_2'
},{
  url: "/images/portfolio_tiles_3.png",
  alt:'tiles_3'
},{
  url: "/images/portfolio_tiles_4.png",
  alt:'tiles_4'
},];
export default function Services() {
  const services = {
    fenceAndDecking: images_1,
    artificialGrass: images_2,
    porcelainPatito: images_2,
    victorianPathways: images_1,
  };

  const [gallery, setGallery] = useState(services.fenceAndDecking);
  const [selectedService, setSelectedService] = useState('fenceAndDecking');

  const handleButtonClick = (serviceKey) => {
    setGallery(services[serviceKey]);
    setSelectedService(serviceKey);
  }

  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className="pt-28 flex flex-col items-center">
        <div className="flex flex-row justify-center mt-10 bg-primary rounded-full">
          <button 
            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out ${selectedService === 'fenceAndDecking' ? 'bg-white text-accent' : 'bg-primary text-white hover:bg-white hover:text-accent'}`} 
            onClick={() => handleButtonClick('fenceAndDecking')}>
            Fence & Decking
          </button>
          <button 
            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out ${selectedService === 'artificialGrass' ? 'bg-white text-accent' : 'bg-primary text-white hover:bg-white hover:text-accent'}`} 
            onClick={() => handleButtonClick('artificialGrass')}>
            Artificial Grass
          </button>
          <button 
            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out ${selectedService === 'porcelainPatito' ? 'bg-white text-accent' : 'bg-primary text-white hover:bg-white hover:text-accent'}`} 
            onClick={() => handleButtonClick('porcelainPatito')}>
            Porcelain Patito
          </button>
          <button 
            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out ${selectedService === 'victorianPathways' ? 'bg-white text-accent' : 'bg-primary text-white hover:bg-white hover:text-accent'}`} 
            onClick={() => handleButtonClick('victorianPathways')}>
            Victorian Pathways
          </button>
     
        </div>
        <GallerySlide images={gallery} title={'Fence Building'} description={<>Step into a visual journey through our captivating garden projects with our stunning gallery slideshow. Immerse yourself in a captivating display of lush landscapes, meticulously designed outdoor spaces, and intricate details that showcase our dedication to creating extraordinary gardens.<br/><br/> Watch as the seasons unfold, revealing the vibrant colors of blooming flowers, the tranquil ambiance of serene water features, and the harmony between nature and artistry. Our gallery slideshow invites you to explore the transformative power of our work, inspiring you to envision the possibilities for your own outdoor sanctuary. Sit back, relax, and let the captivating imagery take you on an enchanting garden adventure.</>}/>
      </div>
      <Footer/>
    </div>
  );
}
