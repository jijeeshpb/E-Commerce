import React, { useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import data_product from '../Assets/product_data';
import { FilterCategory } from '../Filters/FiltersCategory';
import { Link } from 'react-router-dom';

export const ProductList = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = selectedCategories.length
    ? data_product.filter((product) => selectedCategories.includes(product.category))
    : data_product;

  return (
    <section className="shadow-sm Products">
    <Container>
      <Row>
        <Col md={3} className="my-4">
          <h2 className="mb-4">Filter</h2>
          <FilterCategory selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
        </Col>
        <Col md={9}>
          <div className="my-4">
            <h2 className="mb-4">Products</h2>
            <Row>
              {filteredProducts.map((dataProduct) => (
                <Col xs={12} md={6} lg={4} xl={3} className="p-1 mb-4" key={dataProduct.id}>
                  <Link to={`/products/${dataProduct.id}`} className="text-decoration-none">
                  <Card className="shadow-sm border-0">
                    <div className="aspect-square">
                      <Card.Img variant="top" src={dataProduct.image} />
                    </div>
                    <div className="ratingdiv">
                      <div className="star-rating">
                        <div className="rating-container">
                          {dataProduct.rating}
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title>{dataProduct.name}</Card.Title>
                      <ul className="featureslist">
                        {Object.values(dataProduct.features_list).map((feature, index) => (
                          <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                            </svg> {feature}
                          </li>
                        ))}
                      </ul>
                      <Card.Text>
                        <span><strong>{dataProduct.offer_price} </strong></span>
                        <span className="text-muted text-decoration-line-through">{dataProduct.old_price}</span>
                        <span className="float-end text-success">{dataProduct.percentage_off}% off</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};
