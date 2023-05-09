// components/ImageSlider.js
'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const GallerySlide = ({ images }) => {
  return (
    <div className="relative w-3/4 mt-10 text-white bg-accent rounded-3xl p-2">
        <h2 className="text-3xl font-bold text-center p-5">Gallery</h2>
        <p className='p-5'>Our gallery is a testament to the hard work and dedication we put into every project. With every garden design and maintenance task, we pour our heart and soul into creating outdoor spaces that are not just beautiful, but also functional and sustainable. <br/> <br/> Our portfolio showcases the incredible results of this commitment - from lush greenery and vibrant flowers to elegant hardscaping and thoughtful water features. We believe that your outdoor space should be an extension of your home and your personal style, and we work tirelessly to make that vision a reality.</p>
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
