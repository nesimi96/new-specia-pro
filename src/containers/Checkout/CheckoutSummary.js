import React, { useState, useEffect } from 'react';
import '../../sass/main.scss';
import Arrow from '../../components/svg/Arrow';
import CartItem from '../../components/CartComponents/CartItem';
import PromoCode from '../../components/CheckoutComponents/PromoCode';
import CartTotal from '../../components/CartComponents/CartTotal';
import { calcTotal } from '../../components/helpFuncs/calcTotal';
import { Transition } from 'react-transition-group';

const CheckoutSummary = (props) => {

    const [summary, setSummary] = useState(null);

    console.log(props)

    let width = window.innerWidth;
    useEffect(() => {
        if(width > 900) setSummary(true)
    }, [])

    const country = localStorage.getItem('country');
 
    let cartList = null;
    cartList = props.cartList ? props.cartList : null;
    
    const svgArrowStyle = {width: 12, height: 12, fill: 'black', position: 'absolute',
     right: 20, top: '0%', transform: !summary ? 'rotate(180deg)' : 'rotate(270deg)'}

     let cartItems = null;
     if(cartList){
         cartItems = cartList.map((cur, ind) => {
             return <CartItem country={country}  cartList={cur} key={ind} deleteItem={(ind) => props.deleteItem(ind)} index={ind} />
         }) 
     }

     let closeOrderSummary = null;
     if(width < 900) closeOrderSummary = () => setSummary(!summary)

     let cartPrices = {
        ordersPrice: 0,
        shipping: 350,
        totalPrice: 0,
        discount: null,
        withoutDisc: 0,
   }

   if(cartList) { 
    if(cartList.length > 0) {
         cartPrices.ordersPrice = cartList.map((cur, ind) => cur.productPrice).reduce((prev, next) => prev + next)
         cartPrices.totalPrice = cartPrices.ordersPrice + cartPrices.shipping
         cartPrices.discount = cartList.map((cur, ind) => cur.productData.initialPrice ).reduce((prev, next) => prev + next) - cartPrices.ordersPrice
         cartPrices.withoutDisc = cartList.map((cur, ind) => cur.productData.initialPrice * cur.productQuanity).reduce((prev, next) => prev + next)
    }
}


    return <div className="CheckoutSummary">
                <div onClick={closeOrderSummary} className="CheckoutSummary-header">
                     <h3> Narudžba </h3>
                    <Arrow click={closeOrderSummary} style={svgArrowStyle} />
                </div>
                <Transition in={summary} timeout={0} mountOnEnter unmountOnExit>
                {state => (
                    <>
                    <div className="CheckoutSummary-summary">
                        { cartItems }
                    </div>

                    <div className="CheckoutSummary-total"> 
                         <CartTotal country={country}  cartPrices={cartPrices}  from={'CheckoutSummary'} />
                    </div>
                    </>
                )}
                </Transition>
           </div>
}

export default CheckoutSummary

/*<div className="CheckoutSummary-promo">
                         <PromoCode checkPromoValidation={props.checkPromoValidation} 
                         typePromoCode={props.typePromoCode} />
                    </div>
                    */