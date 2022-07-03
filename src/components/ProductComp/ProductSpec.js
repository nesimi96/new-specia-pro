import React, { useState } from 'react';
import '../../sass/main.scss';
import RightSlimArrow from '../svg/RightSlimArrow';

const ProductSpec = (props) => {

    const [desVisible, setDesVisible] = useState(null);

    const iconStyle = {
        width: 12,
        height: 12,
        transform: desVisible ? 'rotate(90deg)' : 'rotate(0)',
        transition: 'all .15s ease-in',
    }


    const specifications = props.specifications.map((cur, ind) => {
        return <div><b>{cur.specName}</b> {cur.spec}</div>
    })
    const toggleDescription = () => {
        setDesVisible(!desVisible);
    }


    return <div className="ArticalInfo">
                <div onClick={() => toggleDescription()} className="ArticalInfo-header">
                      <div> 
                          <RightSlimArrow style={iconStyle} />
                      </div>
                 <p> SPECIFIKACIJE </p>
                </div>
                <div style={{
                    display: desVisible ? 'flex' : 'none',
                    padding: props.specifications > 1 ? '15px 15px 15px 20px' : '0 15px 0 20px'
                }} className="ArticalInfo-description">
                    {specifications}
                </div>
           </div>
}

export default ProductSpec;