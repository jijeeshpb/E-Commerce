import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import firstSlideImage from '../Assets/img/bed.jpg'
// import secondSlideImage from '../Assets/img/chair.jpg'
// import thirdSlideImage from '../Assets/img/mattress.jpg'

var sliderCarouselData = [
  {
    id : 1,
    image : require("../Assets/img/bed.jpg")
  },
  {
    id : 2,
    image : require("../Assets/img/chair.jpg")
  },
  {
    id : 3,
    image : require("../Assets/img/mattress.jpg")
  }
];

export const CarouselBlock = () => {
  return (
    <Carousel data-bs-theme="dark">
      {
        sliderCarouselData.map(sliderCarousel => {
          return (
            <Carousel.Item  key={sliderCarousel.id}>
            <img
              className="d-block w-100"
              src={sliderCarousel.image}
              alt={"Slide " + sliderCarousel.id}
            />
          </Carousel.Item>
          )
        }

        )
      }
         

    </Carousel>

    // <Carousel data-bs-theme="dark">

    //     <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={firstSlideImage}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
      
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={secondSlideImage}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
      
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={thirdSlideImage}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>

    // </Carousel>
  )
}
