import React, { useState, useEffect } from 'react';
import '../../sass/main.scss';
import CartHeader from '../../components/CartComponents/CartHeader';
import CartTotal from '../../components/CartComponents/CartTotal';
import CartSummary from '../../components/CartComponents/CartSummary';
import * as action from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import { connect } from 'react-redux';
import { cartTotal } from '../../components/helpFuncs/cartTotal';
import { Transition } from 'react-transition-group';

const Cart = (props) => {
     
     const [cartList, setCartList] = useState(null);

      useEffect(() => {
          setCartList(props.cartList);
      }, [props.cartList])

     const deleteItemFromCart = (index) => {

       // delete from localStorage
       const listFromLS = [...JSON.parse(localStorage.getItem("cartItem"))];
       listFromLS.splice(index, 1);
       localStorage.setItem('cartItem', JSON.stringify(listFromLS))

       // UPDATE GLOBAL STATES
       props.setCartList();
       props.updateCart();
       
     }

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

     return <Transition in={props.cartOpen} timeout={350} mountOnEnter unmountOnExit >
          {state => (
               <div style={{
                padding: state === 'entered' ? '0 18px' : state === 'exiting' ? '0 0' : '',
                width: state === 'entered' ? '100%' : '0',
                animation: state === 'entering' ? 'cartOpening .35s cubic-bezier(.45,.48,0,.97)' : 
                state === 'exiting' ? 'cartClosing .35s cubic-bezier(.45,.48,0,.97)' : ''
               }} className="Cart">
                    <div style={{
                         display: state === 'entering' || state === 'entered' ? 'block' : 'none',
                         animation: state === 'entering' || state === 'entered' ? 'wrapperOpening .25s linear' : 
                         state === 'exiting' || state === 'exited' ? 'wrapperClosing .15s linear' : ''
                    }} className="Cart-Wrapper">
                         <CartHeader cartClose={() => props.closeCart(actionTypes.CART_CLOSE, null)} />
                         <CartSummary  deleteItem={deleteItemFromCart} cartList={cartList} />
                         <CartTotal cartList={cartList} cartPrices={cartPrices}  />
                    </div>
               </div>
          )}
     </Transition>

}

const mapStateToProps = state => {
     return {
          cartOpen: state.cartOpen,
          cartList: state.cartList,
     }
}

const mapDispatchToProps = dispatch => ({
     closeCart: (type, purpose) => dispatch(action.utility(type, purpose)),
     setCartList: () => dispatch(action.addToCart()),
     updateCart: () => dispatch(action.updateCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);