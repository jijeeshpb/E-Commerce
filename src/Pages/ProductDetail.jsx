import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data_product from '../Components/Assets/product_data';
import ProductDetailSlider from '../Components/Product/ProductDetailSlider'
import ProductDetailSpecification from '../Components/Product/ProductDetailSpecification';
import ProductRating from '../Components/Product/ProductRating';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = data_product.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <section className="pb-2 product_detail">
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <ProductDetailSlider />
        </Col>
        <Col md={6}>
          <h2 className="product-title">{product.name}</h2>          
          <div className="product-rating my-2">
            <div className="star-rating">
              <span>{product.rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
          </div>
          <p className="product-description">{product.description}</p>
          <ul className="product-features list-unstyled">
          {Object.values(product.features_list).map((feature, index) => (
                <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg> {feature}
                </li>
            ))}
          </ul>
          <div className="product-price">
            <span className="offer-price">{product.offer_price} </span>
            <span className="old-price text-muted text-decoration-line-through">{product.old_price}</span>
            <span className="percentage-off text-success"> {product.percentage_off}% off</span>
          </div>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
    </section>
    <ProductDetailSpecification />
    <ProductRating />
    </>
  );
};

export default ProductDetail;