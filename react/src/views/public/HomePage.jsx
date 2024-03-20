import React from 'react'
import MainBanner from '../../components/public/MainBanner';
import SuggestionProduct from '../../components/public/SuggestionProduct';
import ProductReview2 from '../../components/public/ProductRiew2';
import Category from '../../components/public/Category';

// import Container from '../../components/public/Container';

export default function HomePage() {
  return (
    <div>
        <MainBanner/>
        <Category/>
        <SuggestionProduct/>
        <ProductReview2/>
    </div>
  )
}
