import React from 'react'
import MainBanner from '../../components/public/MainBanner';
import ProductReview from '../../components/public/ProductReview';
import CategoryBar from '../../components/public/CategoryBar';
import ProductReview2 from '../../components/public/ProductRiew2';
// import Container from '../../components/public/Container';

export default function HomePage() {
  return (
    <div>
        <MainBanner/>
        <ProductReview/>
        {/* <Container/> */}
        <ProductReview2/>
    </div>
  )
}
