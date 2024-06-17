import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import './ShopByCategory.scss'


var ShopByCategoryData = [
    {
      id : 1,
      name : 'Mattresses & Beddings',
      image : require("../Assets/img/S_Mattress.jpg")
    },
    {
      id : 2,
      name : 'Beds & Side Tables',
      image : require("../Assets/img/S_Bed.jpg")
    },
    {
      id : 3,
      name : 'Pillows & Cushions',
      image : require("../Assets/img/S_Pillow.jpg")
    },
    {
      id : 4,
      name : 'Sofas & Seating',
      image : require("../Assets/img/S_Sofa.jpg")
    },
    {
      id : 5,
      name : 'Wardrobes',
      image : require("../Assets/img/S_Wardrobes.jpg")
    },
    {
      id : 6,
      name : 'Chairs & Furniture',
      image : require("../Assets/img/S_Chair.jpg")
    },
    {
      id : 7,
      name : 'Kids Furniture & Accessories',
      image : require("../Assets/img/S_kids-furniture.jpg")
    },
    {
      id : 8,
      name : 'TV Units & Coffee Tables',
      image : require("../Assets/img/S_EW-TV-units.jpg")
    },
    {
      id : 9,
      name : 'Cabinets & Shelves',
      image : require("../Assets/img/S_Cabinets.jpg")
    },
    {
      id : 10,
      name : 'Kitchen & Dining Furniture',
      image : require("../Assets/img/S_Dining.jpg")
    },
    {
      id : 11,
      name : 'Home Essentials',
      image : require("../Assets/img/S_Home-Essentials.jpg")
    },
    {
      id : 12,
      name : 'Home Decor & Lighting',
      image : require("../Assets/img/S_home-decor-lightings.jpg")
    }
];

export const ShopByCategory = () => {
  return (
    
    <section className="pb-4 ShopByCategory">
      <Container className="mb-4">
        <Row className="my-4">
          <h2 className="text-center my-4 w-100">Shop By Categories</h2>
        </Row>
        <Row>
          {ShopByCategoryData.map(shopcategory => (
            <Col key={shopcategory.id} xs={4} md={3} lg={2}>
              <Card>
                <Col className="cardimg">
                <Card.Img variant="top" src={shopcategory.image} />
                </Col>
                <Card.Body>
                  <Card.Title className="text-center">{shopcategory.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
