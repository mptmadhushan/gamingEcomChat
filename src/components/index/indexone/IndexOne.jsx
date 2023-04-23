import React from 'react';
import OneSlider from './OneSlider';
import Brand from './Brand';
import ShopArea from './ShopArea';
import HeaderOne from '../../header/HeaderOne';
import Footer from '../../footer/Footer';


function IndexOne() {
  return (
    <>
        <HeaderOne/>
        <main>
          <OneSlider/>
          <Brand/>
          <ShopArea/>
        </main>
        <Footer/>
    </>
  )
}

export default IndexOne;
