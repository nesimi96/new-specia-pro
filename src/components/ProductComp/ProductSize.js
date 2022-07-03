import React from 'react';
import '../../sass/main.scss';

const ProductSize = (props) => {
    
    const sizes = props.productData.productSpecifications.size
    
   
    const productBoxes = sizes.map((cur, ind) => {
        let marginLeft = ind !== 0 ? '2%' : '0px'
        let activeSize = props.productSize === ind ? '#dfdfdf' : null
        return <div onClick={() => props.changeProductSize(ind)}
        className='productSize_options_box' style={{marginLeft: marginLeft, backgroundColor: activeSize }}> {cur} </div>
    })


    let choosenSize = sizes.map((cur, ind) => {
        return props.productSize === ind ? cur.size : null
    })

    return <div className="productSize" > 
                <div className='productSize_header'>
                    <b>VELIČINA:</b> {choosenSize}
                </div>
                <div className="productSize_options">
                     {productBoxes}
                </div>
           </div>
}

export default ProductSize

