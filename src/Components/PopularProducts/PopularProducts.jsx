import React from 'react'
import './PopularProducts.css'
import { Container, Card, Row, Col } from 'react-bootstrap'

import data_PopularProduct from '../Assets/product_data';

export const PopularProducts = () => {
    return (
        <section className="shadow-sm PopularProducts">
        <Container>
            <div className="my-4">
                <h2 className="text-center my-4">New Launches</h2>
                <Row>
                    {data_PopularProduct.map(dataProduct => (
                        <Col key={dataProduct.id} xs={12} sm={6} md={4} lg={3} className="p-1 mb-4">
                            <Card className='shadow-sm border-0'>
                                <div className='aspect-square'>
                                    <Card.Img variant="top" src={dataProduct.image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{dataProduct.name}</Card.Title>
                                    <Card.Text>
                                        <span><strong>{dataProduct.offer_price}</strong></span>
                                        <span className="text-muted text-decoration-line-through"> {dataProduct.old_price}</span>
                                        <span className="float-end text-success">{dataProduct.percentage_off}% off</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    </section>
    );
};
