import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export const NavbarBlock = () => {
  return (
    <section className="NavbarBlock">
    <div className="ticker-banner">
      <h2>Get upto 65% off + Additional 10% off with bank offers.</h2>
    </div>
    <Navbar className="bg-theme text-color-nav d-flex" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">Furni.</Navbar.Brand>
          <div className="d-flex position-relative order-md-2">
              <button className="btn primary me-2 carticon" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
                <div className="cart-count-bubble position-absolute badge bg-danger rounded-circle"><span>2</span></div>
              </button>
            </div>
          <Navbar.Collapse id="basic-navbar-nav order-md-3">
            <Nav className="ms-auto">
              <Nav.Link href="/mattress">Mattress</Nav.Link>
              <Nav.Link href="/bedroom">Bedroom</Nav.Link>
              <Nav.Link href="/dining">Dining</Nav.Link>
              <Nav.Link href="/furnishing">Furnishing</Nav.Link>
              <Nav.Link href="/kitchen">Kitchen</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
      </section>
  )
}