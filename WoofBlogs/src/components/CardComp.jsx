import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function CardComp({data}) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} style={{height:'300px'}} />
      <Card.Body>
        <Card.Title>{data.name } ({data.age})</Card.Title>
        <Card.Text>
          {data.des}
        </Card.Text>
        <Button variant="primary">Explore {data.name}</Button>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default CardComp