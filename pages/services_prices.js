import Footer from "@/components/Footer/Footer";
import Header from "../components/Header/Header";
import GallerySlide from "@/components/GallerySlide/GallerySlide";
import { useState } from "react";

const images_1 = [{
  url: "/images/fencing/fence-1.png",
  alt:'fence_1'
},{
  url: "/images/fencing/fence-2.png",
    alt:'fence_2'
},{
  url: "/images/fencing/fence-3.png",
  alt:'fence_3'
},{
  url: "/images/fencing/fence-4.png",
  alt:'fence_4'
},];
const images_2 = [{
  url: "/images/decking/decking-1.png",
    alt:'tiles_1'
},{
  url: "/images/decking/decking-2.png",
  alt:'tiles_2'
},{
  url: "/images/decking/decking-3.png",
  alt:'tiles_3'
},{
  url: "/images/decking/decking-4.png",
  alt:'tiles_4'
},];
export default function Services() {
  const services = {
    fenceAndDecking: images_1,
    artificialGrass: images_2,
    porcelainPatito: images_2,
    victorianPathways: images_1,
  };

  const servicesDescription = {
    fenceAndDecking: "Our comprehensive fence and decking services ensure that your garden not only has the privacy you desire but also the perfect space for relaxation or entertainment. From initial design to final installation, we provide a range of options using high-quality materials that are durable and weather-resistant. Whether you're looking for a traditional wooden fence or a modern composite deck, our team can deliver a result that complements your outdoor space and meets your specific needs.",
    artificialGrass: 'Artificial grass offers an excellent low-maintenance alternative to natural lawns, maintaining a lush, green appearance all year round without the need for watering, mowing, or fertilizing. We provide high-quality, pet-friendly, and eco-friendly artificial grass options that can withstand heavy foot traffic while still looking great. Our team handles everything from the ground preparation, installation, to the finishing touches, ensuring a seamless and professional finish.',
    porcelainPatito: "A porcelain patio can significantly enhance the aesthetic of your outdoor area, creating a chic and modern space that's perfect for entertaining or relaxing. Porcelain is known for its durability, non-slip properties, and resistance to weather extremes, making it an excellent choice for patios. Our team can design and install a variety of styles, colors, and patterns to create a custom look that matches your home and lifestyle.",
    victorianPathways: "Add a touch of elegance and charm to your garden with our Victorian pathway services. These pathways feature distinctive patterns and a blend of rich, traditional colors, reflecting the style of the Victorian era. Using high-quality, durable materials, we meticulously craft these pathways to serve as a beautiful and practical addition to your outdoor space."
  }

  const [gallery, setGallery] = useState(services.fenceAndDecking);
  const [selectedService, setSelectedService] = useState('fenceAndDecking');
  const [title,setTitle] = useState('Fence & Decking');
  const [description,setDescription] = useState(servicesDescription.fenceAndDecking);

  const handleButtonClick = (serviceKey, title) => {
    setGallery(services[serviceKey]);
    setSelectedService(serviceKey);
    setTitle(title);
    setDescription(servicesDescription[serviceKey]);
  }

  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className="pt-28 flex flex-col items-center">
        <div className="flex flex-row justify-center mt-10 bg-primary rounded-full">
          <button 
            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out ${selectedService === 'fenceAndDecking' ? 'bg-white text-accent' : 'bg-primary text-white hover:bg-white hover:text-accent'}`} 
            onClick={() => handleButtonClick('fenceAndDecking','Fence & Decking')}>
            Fence & Decking
          </button>
          <button 
            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out ${selectedService === 'artificialGrass' ? 'bg-white text-accent' : 'bg-primary text-white hover:bg-white hover:text-accent'}`} 
            onClick={() => handleButtonClick('artificialGrass', 'Artifical Grass')}>
            Artificial Grass
          </button>
          <button 
            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out ${selectedService === 'porcelainPatito' ? 'bg-white text-accent' : 'bg-primary text-white hover:bg-white hover:text-accent'}`} 
            onClick={() => handleButtonClick('porcelainPatito', 'Porcelatin Patio')}>
            Porcelain Patito
          </button>
          <button 
            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out ${selectedService === 'victorianPathways' ? 'bg-white text-accent' : 'bg-primary text-white hover:bg-white hover:text-accent'}`} 
            onClick={() => handleButtonClick('victorianPathways', 'Victorian Pathways')}>
            Victorian Pathways
          </button>
     
        </div>
        <GallerySlide images={gallery} title={title} description={description}/>
      </div>
      <Footer/>
    </div>
  );
}
