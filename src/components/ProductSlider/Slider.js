import React, { useEffect, useState } from 'react';
import '../../sass/main.scss';

const Slider = (props) => {


    let products = props.products
    let img = props.img;
    let productName = props.name
    let price = props.price

    ////////////////////////// CSS
    let boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
    let border = ''
    let borderRadius = '12px'

    if(props.from === 'catalogue') {
        boxShadow = 'none'
        border = '0.2px solid rgb(214, 214, 214)'
        borderRadius = '0px'
    }

    return <div className='Slider' style={{boxShadow: boxShadow, border: border, borderRadius: borderRadius}}>
              <div className='Slider_imgHolder'>
                   <img  src={require(`../../assets/images/productimages/${img}.jpg`)}/>
              </div>
              <div className='Slider_headerAndPriceHolder'>
                    <div className='Slider_headerAndPriceHolder_header'>
                        <p> {productName} </p>
                    </div>
                    <div className='Slider_headerAndPriceHolder_price'>
                          <p>{price} RSD</p>
                    </div>
              </div>
              <div className='Slider_utility'></div>
              <div className='Slider_textHolder'>
                   Električni masažer za vrat opušta celo telo. Savršen izbor za vas ukoliko imate problema sa bolom u vratu.
            </div>
    </div>
}

export default Slider
