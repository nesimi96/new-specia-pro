import React from 'react';
import '../../sass/main.scss';

const Quanity = (props) => {

    let regularPrice = props.productData.productPrices.discountPrice;
    let specialDiscounts = props.productData.specialDiscounts;
    let productPrice = props.productPrice;
    let lastQuanity = specialDiscounts[specialDiscounts.length - 1].quanity
    let lastPrice = specialDiscounts[specialDiscounts.length - 1].price    

    if(specialDiscounts){
        specialDiscounts.map((cur, val) => {
            if(cur.quanity === props.productQuanity) {productPrice = cur.quanity * cur.price}
            if(props.productQuanity > cur.quanity) {productPrice = props.productQuanity * lastPrice}
            if(props.productQuanity === 1) { productPrice = regularPrice }
            props.changeProductPrice(productPrice)
        })
    }


    const decraseValues = (ind) => {
        props.changeProductQuanity(ind)
    }


    return <div className='Quanity'>
        <b className='Quanity_header'>KOLIČINA:</b>
        <div className='Quanity_wrapper'>
            <div className='Quanity_wrapper_boxes'>
                <div className='Quanity_wrapper_boxes_inc' onClick={(ind) => decraseValues('dec')} ><b>-</b></div>
                <div className='Quanity_wrapper_boxes_number'><b>{props.productQuanity}</b></div>
                <div className='Quanity_wrapper_boxes_dec' onClick={(ind) => decraseValues('inc')}><b>+</b></div>
            </div> 
            <div className='Quanity_wrapper_price'>
                <h2>= {productPrice} RSD</h2>
            </div>
        </div>
        <div className='Quanity_discountAlert'>
        <p>Napomena:</p> 
        <p style={{marginLeft: '1%'}}>Popust će biti izračunat u korpi.</p>
        </div>
    </div>
}

export default Quanity;