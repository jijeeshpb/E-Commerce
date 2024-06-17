import React from 'react'
import './OurStores.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container } from 'react-bootstrap'
import Slider from "react-slick";

var OurStoresData = [
  {
    id : 1,
    name : 'Bangalore',
    image : require("../Assets/img/bangalore.png")
  },
  {
    id : 2,
    name : 'Ahmedabad',
    image : require("../Assets/img/ahmedabad.png")
  },
  {
    id : 3,
    name : 'Chennai',
    image : require("../Assets/img/chennai.png")
  },
  {
    id : 4,
    name : 'Delhi',
    image : require("../Assets/img/delhi.png")
  },
  {
    id : 5,
    name : 'Hyderabad',
    image : require("../Assets/img/hyderabad.png")
  },
  {
    id : 6,
    name : 'Kochi',
    image : require("../Assets/img/kochi.png")
  },
  {
    id : 7,
    name : 'Kolkata',
    image : require("../Assets/img/kolkata.png")
  },
  {
    id : 8,
    name : 'Mumbai',
    image : require("../Assets/img/mumbai.png")
  },
  {
    id : 9,
    name : 'Pune',
    image : require("../Assets/img/pune.png")
  }
];



export const OurStores = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200, // Medium devices (tablets, less than desktops)
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 992, // Small devices (landscape phones)
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768, // Extra small devices (portrait phones)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <section className=" pb-4 OurStores">
      <Container className="mb-4">
        <div className="row my-4">
          <h2 className="text-center my-4">Our Stores</h2>
        </div>
        <div className="row">
        <div className="slider-container">
              <Slider {...settings}>
              {OurStoresData.map(store => (
                <div key={store.id}>
                  <div className="mb-1 mx-2">
                    <Card>
                      <Card.Img className='Store_img' variant="top" src={store.image} />
                      <Card.Body>
                        <Card.Title className="text-center">{store.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
              </Slider>
          </div>
        </div>
      </Container>
    </section>
  )
}
