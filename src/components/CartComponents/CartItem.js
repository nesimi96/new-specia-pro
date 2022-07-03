import React from 'react';
import { PriceForUI } from '../../components/helpFuncs/PriceForUI';
import '../../sass/main.scss';

const CartItem = (props) => {
     
    const cartList = props.cartList.productData;
    const currentData = props.cartList
    const productImg = cartList.productSpecifications.colors[currentData.activeImage].img[0]

    return <div className="CartItem">
               <div className="CartItem-imgHolder">
               <img  src={require(`../../assets/images/productimages/${productImg}.jpg`)}/>
               </div>
               <div className="CartItem-description">
                    <p> {cartList.productName} <span style={{marginLeft: '10px'}}> X{currentData.productQuanity} </span></p>
                    {props.from === 'CheckoutSummary' ? null : 
                    <div onClick={() => props.deleteItem(props.index)} > &#10005; Ukloni </div> }
               </div>
               <div className="CartItem-price">
                    {currentData.productPrice} RSD
               </div>
            </div>
}

export default CartItem
