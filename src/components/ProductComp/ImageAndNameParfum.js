import React from 'react';
import '../../sass/main.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Dots from './Dots'



const ImageAndNameParfum = (props) => {
    
    const colors = props.productData.productSpecifications.colors

    let image = colors[props.activeImage].img

    const allProductImages = colors[props.activeImage].img.map((cur,ind) => {
        return <SwiperSlide> <img  src={require(`../../assets/images/productimages/${cur}.jpg`)}/> </SwiperSlide>
    })     
    
    return <div className="ImageAndNameParfum">
                <div className="ImageAndNameParfum-img-wrapper"> 
                <Dots activeColorImage={props.activeColorImage} colors={colors} activeImage={props.activeImage}  />
                <Swiper
                               // install Swiper modules
                        modules={[ Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1.1}        
                        scrollbar={{ draggable: true, el: '.scrollbar' }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={(swiper) => props.changeColorImage(swiper.activeIndex)}
                            >
                            { allProductImages }
                            
            </Swiper>
                </div>
                <div className="ImageAndNameParfum-bottom-line"> </div>
                <div className="ImageAndNameParfum-name">
                    <p> 
                        {props.productData.productName}
                    </p>
                </div>
           </div>
}

export default ImageAndNameParfum;

// <img  src={require(`../../assets/images/productimages/${image}.jpg`)}/>

//  {allProductImages}
