import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

const ProductRating = () => {
  return (
    <section className="my-5 ProductRating">
      <Container className="py-5 my-5">
        <Row className="text-center">
          <Col md={12}>
            <Carousel variant="dark" controls={true} interval={3000}>
              <Carousel.Item>
                <p className="lead font-italic mx-4 mx-md-5">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                  numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
                </p>
                <div className="mt-5 mb-4">
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    className="rounded-circle img-fluid shadow-1-strong"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-muted mb-0">- Anna Morian</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className="lead font-italic mx-4 mx-md-5">
                  "Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores
                  repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing
                  elit."
                </p>
                <div className="mt-5 mb-4">
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                    className="rounded-circle img-fluid shadow-1-strong"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-muted mb-0">- Teresa May</p>
              </Carousel.Item>
              <Carousel.Item>
                <p className="lead font-italic mx-4 mx-md-5">
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in
                  maiores."
                </p>
                <div className="mt-5 mb-4">
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    className="rounded-circle img-fluid shadow-1-strong"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-muted mb-0">- Kate Allise</p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductRating;
