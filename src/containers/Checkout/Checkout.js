import React, { useState, useEffect, useMemo } from 'react';
import '../../sass/main.scss';
import Info from '../../containers/Info/Info';
import Form from './Form';
import CheckoutSummary from './CheckoutSummary';
import { connect } from 'react-redux';
import { calcTotal } from '../../components/helpFuncs/calcTotal';
import { srbParfumData } from '../../data/srbParfumData';
import axios from 'axios';
import * as action from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import PromoCode from '../../components/CheckoutComponents/PromoCode';


const Checkout = (props) => {

    let [parfums, setParfums] = useState(null);
    let [parfumKeys, setParfumkeys] = useState(null);
    let [promoCodes, setpromoCodes] = useState(null);
    let [promoTyped, setPromoTyped] = useState(0);
    let [promoDiscount, setPromoDiscount] = useState(0);
    let [emails, setEmails] = useState(null);
    let [emailKeys, setEmailKeys] = useState(null);

    const country = localStorage.getItem('country')
    
    const cartList = props.cartsList;


   const shipping = null

    
    const currentTime = () => {
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        const splited = utc.split('/').reverse();
        const date = splited.join('.')

        const times = new Date();
        let h = times.getHours();
        let m = times.getMinutes();
        let s = times.getSeconds();
        let time = h + ':' + m + ':' + s

        const currentTime = {
            date: date,
            time: time,
        }

        return currentTime;

    }


    const deleteItemFromCart = (index) => {

        // delete from localStorage
        const listFromLS = [...JSON.parse(localStorage.getItem("cartItem"))];
        listFromLS.splice(index, 1);
        localStorage.setItem('cartItem', JSON.stringify(listFromLS))
 
        // UPDATE GLOBAL STATES
        props.setCartList();
        props.updateCart();
        
      }

      // SEND USER DATA TO DATABASE
      const sendData = (email, inputData) => {
        
        let orderID = Math.floor(Math.random() * 9999)
        let data = {
           userInfo: inputData.map((cur, ind) => cur),
           emailData: email.val,
           time: currentTime(),
           cartList: cartList,
           orderID : orderID,
        }

        axios.post('https://vestige-2172c.firebaseio.com/newprojectorders.json', data )
        .then(res => {
            localStorage.setItem('orderID', JSON.stringify(data.orderID))
            props.route.history.push('/order-summary')

            console.log(res)
        })
        .catch(err => console.log(err))
           
        localStorage.setItem('orderID', JSON.stringify(data.orderID))
        props.route.history.push('/order-summary')

        console.log(data)
      }

    return <div className="Checkout">
               <CheckoutSummary country={country} cartList={cartList} deleteItem={() => deleteItemFromCart()}  />
               <h1>Ispunite formu</h1>
               <Form sendData={(email, data) => sendData(email, data)}  cartList={cartList}/>
           </div>
}

const mapStateToProps = state => {
    return {
        cartsList: state.cartList
    }
}

const mapDispatchToProps = dispatch => ({
    closeCart: (type, purpose) => dispatch(action.utility(type, purpose)),
    setCartList: () => dispatch(action.addToCart()),
    updateCart: () => dispatch(action.updateCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);