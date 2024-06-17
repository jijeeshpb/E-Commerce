import React from 'react'
import './Footer.css'
import { Container, Row, Col, Nav } from 'react-bootstrap'

export const Footer = () => {

  const serviceItems = [
    {
      icon: (
        <svg width="32" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H5.63636V24.1818H35" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M8.72763 35.0021C10.4347 35.0021 11.8185 33.6183 11.8185 31.9112C11.8185 30.2042 10.4347 28.8203 8.72763 28.8203C7.02057 28.8203 5.63672 30.2042 5.63672 31.9112C5.63672 33.6183 7.02057 35.0021 8.72763 35.0021Z" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M31.9073 35.0021C33.6144 35.0021 34.9982 33.6183 34.9982 31.9112C34.9982 30.2042 33.6144 28.8203 31.9073 28.8203C30.2003 28.8203 28.8164 30.2042 28.8164 31.9112C28.8164 33.6183 30.2003 35.0021 31.9073 35.0021Z" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M34.9982 1H11.8164V18H34.9982V1Z" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M11.8164 7.17969H34.9982" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
        </svg>
      ),
      title: 'Free Shipping',
      details: 'When ordering over $100'
    },
    {
      icon: (
        <svg width="32" height="37" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31 17.4492C31 25.6992 24.25 32.4492 16 32.4492C7.75 32.4492 1 25.6992 1 17.4492C1 9.19922 7.75 2.44922 16 2.44922C21.85 2.44922 26.95 5.74922 29.35 10.6992" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" />
          <path d="M30.7 2L29.5 10.85L20.5 9.65" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
        </svg>
      ),
      title: 'Free Return',
      details: 'Get Return within 30 days'
    },
    {
      icon: (
        <svg width="32" height="37" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.6654 18.668H9.33203V27.0013H22.6654V18.668Z" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M12.668 18.6654V13.6654C12.668 11.832 14.168 10.332 16.0013 10.332C17.8346 10.332 19.3346 11.832 19.3346 13.6654V18.6654" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
        </svg>
      ),
      title: 'Secure Payment',
      details: '100% Secure Online Payment'
    },
    {
      icon: (
        <svg width="32" height="37" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" />
          <path d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" />
          <path d="M16 28V22" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" />
          <path d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z" stroke="#F9FFFB" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
        </svg>
      ),
      title: 'Best Quality',
      details: 'Original Product Guaranteed'
    }
  ];


  return (
    <section className="bg-theme FooterBlock">
      <Container>
        <footer className="pt-5 pb-1">
          
        <div className="footer-service-section mb-5">
          <Row className="gy-4">
            {serviceItems.map((item, index) => (
              <Col key={index} lg={3} sm={6}>
                <div className="service-wrapper">
                  <div className="service-img">
                    <span>{item.icon}</span>
                  </div>
                  <div className="service-content">
                    <h5 className="service-info service-title">{item.title}</h5>
                    <p className="service-info service-details">{item.details}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
          <Row>
            <Col xs={12} md={6} lg={4} className="mb-3">
              <h5>Furni.</h5>
              <p>Browse the collection of our new products, You’ll definitely find what you are looking for.</p>
            </Col>

            <Col xs={12} md={6} lg={2} className="mb-3">
              <h5>Who We Are</h5>
              <Nav className="flex-column">
                {['Orders', 'Store Location', 'Testimonials', 'Sitemap', 'FAQs'].map((item, index) => (
                  <Nav.Item key={index} className="mb-2">
                    <Nav.Link href="#" className="p-0 text-body-secondary">{item}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>

            <Col xs={12} md={6} lg={2} className="mb-3">
              <h5>Information</h5>
              <Nav className="flex-column">
                {['Terms', 'Facilities', 'Shipping & Location', 'Payment, Return & Refund', 'Warranty'].map((item, index) => (
                  <Nav.Item key={index} className="mb-2">
                    <Nav.Link href="#" className="p-0 text-body-secondary">{item}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>

            <Col xs={12} md={6} lg={3} className="mb-3">
              <h5>Contact-Info</h5>
              <p>Contact us at +91 99998 88800</p>
              <p>We are here to help you every day between 9:30 AM to 7:30 PM</p>
              <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
            </Col>
          </Row>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              {[
                { icon: 'twitter', link: 'https://twitter.com' },
                { icon: 'facebook', link: 'https://facebook.com' },
                { icon: 'youtube', link: 'https://youtube.com' }
              ].map(({ icon, link }, index) => (
                <li key={index} className="ms-3">
                  <a className="link-body-emphasis" href={link}>
                    {icon === 'twitter' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5 9.341-9.334v-.424A6.6 6.6 0 0 0 16 3.542a6.438 6.438 0 0 1-1.889.518 3.302 3.302 0 0 0 1.444-1.816 6.533 6.533 0 0 1-2.084.797 3.286 3.286 0 0 0-5.594 2.994A9.325 9.325 0 0 1 1.114 2.1a3.286 3.286 0 0 0 1.017 4.382A3.323 3.323 0 0 1 .64 6.575v.041a3.286 3.286 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.21 0-.418-.021-.622-.062a3.286 3.286 0 0 0 3.067 2.281A6.588 6.588 0 0 1 .78 13.578a9.292 9.292 0 0 0 5.026 1.466"/>
                      </svg>
                    )}
                    {icon === 'facebook' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                      </svg>
                    )}
                    {icon === 'youtube' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </Container>
    </section>
  );
};
