import React from 'react';
import '../../sass/main.scss';

const Dots = (props) => {

    let colors = props.colors[props.activeImage]

    let dots = colors.img.map((cur,ind) => {
        let activeClass = props.activeColorImage === ind ? '8px' : null
        return <div className='sliderDots-dot' style={{width: activeClass, height: activeClass}} ></div>
    })   

    return <div className='sliderDots'> 
               {dots}
           </div>
}

export default Dots