import React, { useState } from 'react';
import '../../sass/main.scss';
import RightSlimArrow from '../svg/RightSlimArrow';

const ProductFaq = (props) => {

    const faq = props.productData.productfaq

    const [desVisible, setDesVisible] = useState(null);

    const iconStyle = {
        width: 12,
        height: 12,
        transform: desVisible ? 'rotate(90deg)' : 'rotate(0)',
        transition: 'all .15s ease-in',
    }

    const faqs = faq.map((cur, ind) => {
        return <div>
             <div><b>{cur.q}</b></div>
             <div>{cur.a}</div>
        </div>
    })
   
    const toggleDescription = () => {
        setDesVisible(!desVisible);
    }

    return <div className="ArticalInfo">
                <div onClick={() => toggleDescription()} className="ArticalInfo-header">
                      <div> 
                          <RightSlimArrow style={iconStyle} />
                      </div>
                 <p> ČESTO POSTAVLJENA PITANJA </p>
                </div>
                <div style={{
                    display: desVisible ? 'flex' : 'none',
                    padding: faq > 1 ? '15px 15px 15px 20px' : '0 15px 0 20px'
                }} className="ArticalInfo-description">
                    {faqs}
                </div>
           </div>
}

export default ProductFaq;