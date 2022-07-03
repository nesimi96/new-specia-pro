import React from 'react';
import '../../sass/main.scss';

const ProductColor = (props) => {

    let productColors = props.productData.productSpecifications.colors
 
    const colorChoose = productColors.map((cur, ind) => {

       return  < div onClick={() => props.changeImage(ind)}  className='productColor_chooseColor_box' 
       style={{ backgroundImage: `linear-gradient(to bottom right, ${cur.color[0]} 50%, ${cur.color[1]} 50%)`
    }}
       ></div>
            
    })

    return <div className="productColor">
                <div>
                    <b>BOJA:</b> {productColors[props.activeImage].colorLabel}  
                    <div className='productColor_chooseColor'>
                        {colorChoose} 
                </div>
               
                </div>
           </div>
}

export default ProductColor;



