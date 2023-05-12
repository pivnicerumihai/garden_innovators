// components/ImageSlider.js
'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const GallerySlide = ({ images, description, title }) => {
  return (
    <div className="relative w-3/4 mt-10 text-white bg-accent rounded-3xl p-2">
        <h2 className="text-3xl font-bold text-center p-5">{title}</h2>
        <p className='p-5'>{description}</p>
      <Carousel showThumbs={true} showStatus={false} showArrows={true} interval={5000} autoPlay infiniteLoop>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.alt} width={200} height={100}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GallerySlide;
