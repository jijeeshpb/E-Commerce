import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from 'react-bootstrap';

import OrthoClassic from '../Assets/img/Ortho_Classic.jpg';
import SBed from '../Assets/img/S_Bed.jpg';
import SChair from '../Assets/img/S_Chair.jpg';
import SEWTVUnits from '../Assets/img/S_EW-TV-units.jpg';
import SDining from '../Assets/img/S_Dining.jpg';

const SliderWithThumbnails = () => {
  const mainSliderSettings = {
    //autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    asNavFor: '.slider-nav-thumbnails'
  };

  const thumbnailSliderSettings = { 
    //autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    dots: false,
    focusOnSelect: true,
    vertical: true, // Display thumbnails vertically
    verticalSwiping: true, // Enable vertical swiping
    arrows: true // Hide arrows on thumbnails
  };

  const productImages = [
    OrthoClassic,
    SBed,
    SChair,
    SEWTVUnits,
    SDining
  ];
  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={2}>
        <Slider {...thumbnailSliderSettings} className="slider-nav-thumbnails">
          {productImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Col>
      <Col xs={10}>
        <Slider {...mainSliderSettings} className="main-slider">
          {productImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Col>
    </Row>
  </Container>
  );
};

export default SliderWithThumbnails;