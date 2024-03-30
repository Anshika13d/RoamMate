import React from 'react'

//bootstrap
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { carouselImages } from '../assets/CarouselImg'; 


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={carouselImages.dog1} // Using the imported image
            alt="First slide"
            style={{height: '530px', filter: 'brightness(60%)'}}
      />
        <Carousel.Caption>
          <p>A dog is the only thing on earth that loves you more than he loves himself.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={carouselImages.dog2} // Using the imported image
            alt="First slide"
            style={{height: '530px', filter: 'brightness(60%)'}}
      />
        <Carousel.Caption>
          <p>The world would be a nicer place if everyone had the ability to love as unconditionally as a dog.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={carouselImages.dog3} // Using the imported image
            alt="First slide"
            style={{height: 531, filter: 'brightness (60%)'}}
      />
        <Carousel.Caption>
          <p>
          Happiness is a warm puppy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 style={{textAlign: 'center', paddingTop: '100px'}}>Welcome to {`WoofBlogs`} !</h1>
    </>
  )
}

export default Home