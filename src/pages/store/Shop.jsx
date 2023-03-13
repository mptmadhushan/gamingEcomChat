import React from 'react'
import BreadCrumb from './BreadCrumb';
import HeaderTwo from '../../components/header/HeaderOne';
import Footer from '../../components/footer/Footer';
import ShopArea from './ShopArea';


function Shop() {
  return (
	<>
	 <HeaderTwo/>
     <main>
	 	<BreadCrumb/>
		<ShopArea/>
	 </main>
	 <Footer/>
	</>
  )
}

export default Shop