import React, { useEffect, useState } from 'react';
import '../../sass/main.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


const FilteredProduct = (props) => {
    
    let product = props.product
    let img = product.productSpecifications.colors[0].img[0]
    let productName = product.productName
    let regularPrice = product.productPrices.regularPrice
    let discountPrice = product.productPrices.discountPrice
    let savedAmount = regularPrice - discountPrice
    let productUrl = product.productURL

    let ifDiscount =  <div className='filteredProduct_priceBox'>
                         <div className='filteredProduct_priceBox_oldPrice'><span>{regularPrice} RSD</span> </div>
                    </div>

   
    let regularPriceBox = <div className='filteredProduct_priceBox_regularPrice'>{regularPrice} <span>RSD</span></div>

    let priceColor = 'rgb(253, 46, 46);'

    if(!discountPrice) {
        ifDiscount = null
        discountPrice = regularPrice
        regularPrice = null
        regularPriceBox = null
        priceColor = 'black'
    }

    const click = () => {
        console.log('reggg')
    }
   
    return <div className='filteredProduct'>
                <div onClick={(url) => props.redirectToRoute(productUrl)} className='filteredProduct_imgHolder'>
                        <img  src={require(`../../assets/images/productimages/${img}.jpg`)}/>
                </div>
                <div className='filteredProduct_name'>{productName}</div>
               <div className='filteredProduct_priceBox'>
                   {regularPriceBox}
                   <div style={{color: priceColor }} className='filteredProduct_priceBox_discountPrice'>{discountPrice} <span>RSD</span></div>
               </div>
               <div onClick={() => props.multipleMethods()} className='filteredProduct_button'>
                 DODAJ U KORPU
               </div>
            </div>
}

export default FilteredProduct
