import React, { useEffect, useState } from 'react';
import '../../sass/main.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import FilteredProduct from './FilteredProduct';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index'

const FilteredProducts = (props) => {
    
    let products = props.superDiscounts
    let route = props.route


    const redirectToRoute = (url) => {route.history.push(url)} 

    let render = products.map((prod, ind) => {
        
        console.log(prod)

        const multipleMethods = () => {
            
            const cartItem = {
                productData: prod,
                productPrice: prod.productPrices.discountPrice == false ? prod.productPrices.regularPrice : prod.productPrices.discountPrice ,
                productQuanity: 1,
                productSize: null,
                activeImage: 0
            }
            
            props.addItemToLocalStorage(cartItem);
            props.updateCart();

            console.log(prod.productSpecifications.colors[0].img[0])
            console.log(cartItem.productPrice)
    
        }

        let url = prod.productURL
        return <SwiperSlide><FilteredProduct multipleMethods={() => multipleMethods()} redirectToRoute={redirectToRoute} route={route} key={ind} product={prod} /></SwiperSlide>
    })



    return <div className='productWrapper'>
                <div className='productWrapper_header' >SPECIJALNI POPUSTI</div>
                <div className='productWrapper_holder'>
                       <Swiper 
                        modules={[ Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={2.15}        
                        
                        onSwiper={(swiper) => console.log(swiper)}
                 >
                      {render}
              </Swiper>
                </div>
          </div>
}


const mapDispatchToProps = dispatch => ({
    addItemToLocalStorage: (cartObj) => dispatch(action.itemToLocalStorage(cartObj)),
    updateCart: () => dispatch(action.updateCart())
})

export default connect(null, mapDispatchToProps)(FilteredProducts)