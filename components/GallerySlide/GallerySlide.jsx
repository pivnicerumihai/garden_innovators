// components/ImageSlider.js
'use client'
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image'

const GallerySlide = ({ images, description, title }) => {
  return (
    <div className="relative w-full md:w-3/4 mt-10 text-white bg-primary lg:rounded-lg p-2 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center p-5">{title}</h2>
        <p className='px-2 md:px-5'>{description}</p>
      <Fade>
        {images.map((image, index) => {
          return (
            <div key={index} className="mx-2 md:mx-5 my-5">
              <img src={image.url} className='lg:rounded-lg w-full'/>
               </div>
        
          )
        })}
      </Fade>
    </div>
  );
};

export default GallerySlide;
