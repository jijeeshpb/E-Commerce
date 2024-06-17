import React from 'react'
import './AdBanner.scss'
import AdBannerImage from '../Assets/img/Ad_Banner.jpg';
import { Container } from 'react-bootstrap';

export const AdBanner = () => {
  return (
    <section className="AdBanner">
        <Container>
        <div className="Ad-Banner">
            <img src={AdBannerImage} alt="Ad Banner" />
        </div>
        </Container>
    </section>
  );
};