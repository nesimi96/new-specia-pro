import React from 'react';
import '../../sass/main.scss';
import PrimaryButton from '../Buttons/PrimaryButton';
import { PriceForUI } from '../helpFuncs/PriceForUI';
import ParfumRating from './ParfumRating';

const ParfumQuanityAndPrice = (props) => {

    const price = props.price;
    const country = props.country;

       return <>
                <PrimaryButton click={() => props.toLocalStorage()} text="DODAJ U KORPU" style={props.buttonStyle}/>
                 {/*<ParfumRating parfumData={props.parfumData} />*/}
                <div className="Parfum-bottom-line"></div>
             </>
}

export default ParfumQuanityAndPrice;

