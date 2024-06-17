import React from 'react';
import { CarouselBlock } from '../Components/Carousel/Carousel';
import { OurStores } from '../Components/OurStores/OurStores';
import { PopularProducts } from '../Components/PopularProducts/PopularProducts';
import { ShopByCategory } from '../Components/ShopByCategory/ShopByCategory';
import { AdBanner } from '../Components/AdBanner/AdBanner';

export const Index = () => {
  return (
    <>
      <CarouselBlock />
      <ShopByCategory />
      <AdBanner />
      <PopularProducts />
      <OurStores />
    </>
  );
};
