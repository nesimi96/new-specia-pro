import React from 'react';
import '../../sass/main.scss';
import { PriceForUI } from '../../components/helpFuncs/PriceForUI';
import SecondaryButton from '../../components/Buttons/SecondaryButton';
import { cartTotal } from '../helpFuncs/cartTotal';

const CartTotal = (props) => {
    
    let cartPrices = props.cartPrices
    console.log(cartPrices)

    let disc = cartPrices.discount ? <div className="Cart-Total-prices__delivery">
    <div className="Cart-Total-prices__delivery-first">Popust:</div>
    <div className="Cart-Total-prices__delivery-second"> <b>-</b> {cartPrices.discount} RSD </div>
</div> : null;
    
    
    return <div className="Cart-Total">
                <div className="Cart-Total-prices">
                     <div className="Cart-Total-prices__money">
                         <div className="Cart-Total-prices__money-first">Narudžba:</div>
                         <div className="Cart-Total-prices__money-second"> {cartPrices.withoutDisc} RSD </div>
                     </div>
                     <div className="Cart-Total-prices__delivery">
                         <div className="Cart-Total-prices__delivery-first">Dostava:</div>
                         <div className="Cart-Total-prices__delivery-second"> {cartPrices.shipping} RSD </div>
                     </div>
                     {disc}
                </div>
                <div className="Cart-Total-total" style={{borderBottom: props.from === 'CheckoutSummary' ?
                'none' : 'border-bottom: .35px solid rgb(189, 189, 189)' }}>
                     <div className="Cart-Total-total-first"> UKUPNO: </div>
                     <div className="Cart-Total-total-second"> {cartPrices.totalPrice} RSD </div>
                     
                </div>
                { props.from === 'CheckoutSummary' ? null :
                <div className="Cart-Total-proceed">
                        <SecondaryButton click={() => window.location.href="/checkout"} style={{
                            fontSize: 15,
                            letterSpacing: 1.5,
                        }} text="NASTAVI" />
                </div> }
           </div>
}

export default CartTotal;

