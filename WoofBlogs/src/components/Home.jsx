import React from 'react'

//bootstrap
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { carouselImages } from '../assets/CarouselImg'; 

//rrd
import {Routes, Route} from 'react-router-dom'

//componets
import Login from './Login';
import Signup from './Signup';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={1000}>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={carouselImages.dog1} 
            alt="First slide"
            style={{height: '580px', filter: 'brightness(60%)'}}
      />
        <Carousel.Caption>
          <p><i>
"Traveling – it leaves you speechless, then turns you into a storyteller." - Ibn Battuta </i></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={carouselImages.dog2} // Using the imported image
            alt="second slide"
            style={{height: '580px', filter: 'brightness(60%)'}}
      />
        <Carousel.Caption>
          <p><i> "The world is a book, and those who do not travel read only one page." - Saint Augustine </i>
</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={carouselImages.dog3} // Using the imported image
            alt="third slide"
            style={{height: 581, filter: 'brightness(60%)'}}
      />
        <Carousel.Caption>
          <p> <i>
          "Jobs fill your pocket, but adventures fill your soul." - Jamie Lyn Beatty </i>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 style={{textAlign: 'center', paddingTop: '100px'}}>Welcome to {`WoofBlogs`} !</h1>

    
    </>
  )
}

export default Home