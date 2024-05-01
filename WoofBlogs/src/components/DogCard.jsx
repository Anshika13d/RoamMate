import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function DogCard({ imageUrl, width, height }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt="Cat" style={{ height: '180px' }} />
      <Card.Body>
        <Card.Title>Cat</Card.Title>
        <Card.Text>
          <strong>width: </strong> {width} <br />
          <strong>height: </strong> {height}
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default DogCard;
