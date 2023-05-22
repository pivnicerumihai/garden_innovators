// components/ImageSlider.js
'use client'
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image'



const GallerySlide = ({ images, description, title }) => {
  return (
    <div className="relative w-3/4 mt-10 text-white bg-accent rounded-3xl p-2">
        <h2 className="text-3xl font-bold text-center p-5">{title}</h2>
        <p className='p-5'>{description}</p>
      <Fade>
        {images.map((image, index) => {
          return (
            <div key={index} className="m-5">
              <img src={image.url} className='rounded-xl'/>
               </div>
        
          )
        })}
      </Fade>
    </div>
  );
};

export default GallerySlide;
