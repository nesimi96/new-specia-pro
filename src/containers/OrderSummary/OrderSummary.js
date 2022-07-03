import React, { useEffect, useState } from 'react';
import '../../sass/main.scss';
import axios from 'axios';
import OrderItems from './OrderItems';

const OrderSummary = () => {

    let [order, setOrder] = useState(null)

    useEffect(() => {

        setTimeout(() => {

            axios.get('https://vestige-2172c.firebaseio.com/newprojectorders.json')
            .then(res => {
                
                const extractData = Object.values(res.data);
                const extractKeys = Object.keys(res.data)

                let localID = parseInt(localStorage.getItem('orderID', JSON.stringify()))
                let ordr = extractData.find(cur => cur.orderID === localID ? cur : null)
                setOrder(ordr)
    
            })
            .catch(err => {
        
            })
        }, 1500)
    }, [])

    let render = 'LOADER' 
    

    if(order){                
        render = <div className='OrderSummary'>
                    <div className='OrderSummary_header'>
                        <div className='OrderSummary_header_thank you'>
                            Vaša narudžba je prihvaćena. Hvala!
                        </div>
                        <div className='OrderSummary_header'>
                         Broj vaše nardužbe je: <b>{order.orderID}</b>
                        </div>
                        <OrderItems />
                    </div>
                </div>
    }


    return render

}

export default OrderSummary;