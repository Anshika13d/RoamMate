import React, { useState, useEffect } from 'react';
import DogCard from './DogCard';

function About() {
  const [randomCat, setrandomCat] = useState([]);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const imageData = await response.json();
        setrandomCat(imageData);
      } catch (error) {
          console.error('Error fetching cat data:', error);
        }
    };

    fetchCatData();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      <div style={{ width: '100%' }}>
        <h1 style={{ marginTop: '20px', marginBottom: '80px', textAlign: 'center', alignItems: 'center' }}>Some Interesting Facts About Cats!! 🐈🐱🙀 </h1>
      </div>

      {randomCat.map((image) => (
        <DogCard key={image.id} imageUrl={image.url} width={image.width} height={image.height} />
      ))}
    </div>
  );
}

export default About;
