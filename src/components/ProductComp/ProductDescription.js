import React, { useState } from 'react';
import '../../sass/main.scss';
import RightSlimArrow from '../svg/RightSlimArrow';

const ProductDescription = (props) => {

    const [desVisible, setDesVisible] = useState(!null);

    let productData = props.productData

    const iconStyle = {
        width: 12,
        height: 12,
        transform: desVisible ? 'rotate(90deg)' : 'rotate(0)',
        transition: 'all .15s ease-in',
    }

    let text = props.productData.productDescription.map((curText, textInd) => <div dangerouslySetInnerHTML={{__html: curText}}/>)

    const lists = props.list.map((cur, ind) => {return <div >{cur}</div> })

    
    const toggleDescription = () => {
        setDesVisible(!desVisible);
    }

    const data = 'lorem <b>ipsum</b>';


    return <div className="ArticalInfo">
                <div onClick={() => toggleDescription()} className="ArticalInfo-header">
                      <div> 
                          <RightSlimArrow style={iconStyle} />
                      </div>
                 <p> OPIS PROIZVODA </p>
                </div>
                <div style={{
                    display: desVisible ? 'flex' : 'none',
                    padding: props.list.length > 1 ? '15px 15px 15px 20px' : '0 15px 0 20px'
                }} className="ArticalInfo-description">
                         {text}
                </div>
           </div>
}

export default ProductDescription;