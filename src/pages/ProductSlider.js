import React, { useEffect, useState } from 'react';
import Slider from '../components/ProductSlider/Slider'
import '../sass/main.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


const ProductSlider = (props) => {


    let products = props.recommendProducts;
    let route = props.route

    let renderProducts = products.map((prod, ind) => {
        let img = prod.productSpecifications.colors[0].img[0]
        let name = prod.productName
        let price = prod.initialPrice
        let url = prod.productURL
        return <SwiperSlide onClick={() => redirectToRoute(url)} > <Slider products={products} key={ind} price={price} ind={ind} name={name} img={img}/> </SwiperSlide> 
    })

    const redirectToRoute = (url) => {
        console.log(url)
        route.history.push(url)
    }

   return <div className='productSlider'>
              <div className='productSlider_header'>
                 <h6>Preporuka za vas</h6>
              </div>
              <div className='productSlider_holder'>
              <Swiper 
                 // install Swiper modules
                        modules={[ Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={1.2}        
                        
                        onSwiper={(swiper) => console.log(swiper)}
                 >
                      {renderProducts}
              </Swiper>
              </div>
          </div>
}

export default ProductSlider