import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Table } from 'react-bootstrap';
import data_product from '../Assets/product_data';

const ProductDetailSpecification = () => {
  const { productId } = useParams();
  const selectedProduct = data_product.find(product => product.id === parseInt(productId));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    
    <section className="ProductDetailSpecification">
      <Container className="my-5 py-5">
        <h2 className="text-center mb-5">Specifications</h2>
        <Row>
          <Col md={12}>
            <ul className="nav nav-tabs d-none d-lg-flex" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="what-you-need-to-know-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#what-you-need-to-know"
                  type="button"
                  role="tab"
                  aria-controls="what-you-need-to-know"
                  aria-selected="true"
                >
                  What You Need To Know
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="product-information-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#product-information"
                  type="button"
                  role="tab"
                  aria-controls="product-information"
                  aria-selected="false"
                >
                  Product Information
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="care-maintenance-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#care-maintenance"
                  type="button"
                  role="tab"
                  aria-controls="care-maintenance"
                  aria-selected="false"
                >
                  Care & Maintenance
                </button>
              </li>
            </ul>

            <div className="tab-content accordion" id="myTabContent">
              <div
                className="tab-pane fade show active accordion-item"
                id="what-you-need-to-know"
                role="tabpanel"
                aria-labelledby="what-you-need-to-know-tab"
              >
                <h2 className="accordion-header d-lg-none" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What You Need To Know
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show d-lg-block"
                  aria-labelledby="headingOne"
                  data-bs-parent="#myTabContent"
                >
                  <div className="accordion-body">
                    {selectedProduct.detail_desc}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade accordion-item"
                id="product-information"
                role="tabpanel"
                aria-labelledby="product-information-tab"
              >
                <h2 className="accordion-header d-lg-none" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Product Information
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse d-lg-block"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#myTabContent"
                >
                  <div className="accordion-body">
                    <Row>
                    <Col md={6}>
                    <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Warranty</td>
                        <td>{selectedProduct.warrantyInformation}</td>
                      </tr>
                      <tr>
                        <td>Shipping Information</td>
                        <td>{selectedProduct.shippingInformation}</td>
                      </tr>
                      <tr>
                        <td>Availability Status</td>
                        <td>{selectedProduct.availabilityStatus}</td>
                      </tr>                      
                    </tbody>
                    </Table> 
                    </Col>
                    <Col md={6}>
                    <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Dimension</td>
                        <td>{selectedProduct.dimension}</td>
                      </tr>
                      <tr>
                        <td>Seating Height</td>
                        <td>{selectedProduct.seating_height}</td>
                      </tr>
                      <tr>
                        <td>Headboard Height	600mm
                        </td>
                        <td>{selectedProduct.headboard_height}</td>
                      </tr>                      
                    </tbody>
                    </Table> 
                    </Col>
                    </Row>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade accordion-item"
                id="care-maintenance"
                role="tabpanel"
                aria-labelledby="care-maintenance-tab"
              >
                <h2 className="accordion-header d-lg-none" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Care & Maintenance
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse d-lg-block"
                  aria-labelledby="headingThree"
                  data-bs-parent="#myTabContent"
                >
                  <div className="accordion-body">
                    <p>A modern blend of good quality and design with furniture that not only enhances your living space but also aligns with your values.</p>
                    <p>High quality pieces made to last through a busy lifestyle and dynamic moves.</p>
                    <p>Delivered hassle free in shorter timelines to cope with your dynamic lifestyle.</p>
                    <p>Proudly Indian with a sustainable bent of mind in sourcing manufacturing and delivery.</p>
                    <p>Design that aligns with modern Indian values and lifestyle with an innovative approach.</p>
                    <p>All of our products aspire to be: DURABLE | RESPONSIBLE | MODERN | INNOVATIVE | THOUGHTFUL</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetailSpecification;
