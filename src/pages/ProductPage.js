import React, { useEffect, useState } from 'react';
import Layout from '../containers/Layout/Layout';
import ImageAndNameParfum from '../components/ProductComp/ImageAndNameParfum';
import ProductButton from '../components/ProductComp/ProductButton';
import TopThree from '../components/TopThree/TopThree';
import ProductColor from '../components/ProductComp/ProductColor';
import ProductSize from '../components/ProductComp/ProductSize';
import Quanity from '../components/ProductComp/Quanity';
import ProductDescription from '../components/ProductComp/ProductDescription';
import ProductSpec from '../components/ProductComp/ProductSpec';
import ProductFaq from '../components/ProductComp/ProductFaq'
import Brands from '../components/Brands/Brands';
import Loader from '../components/Loader/Loader';
import ProductSlider from './ProductSlider';
import { useParams } from "react-router-dom";
import { srbParfumData } from '../data/srbParfumData';
import '../sass/main.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../store/actions/index';

const Perfum = (props) => {

    const [productData, setProductData] = useState('');
    const [price, setPrice] = useState('');
    const [activePrice, setActivePrice] = useState('');
    const [routeURL, setrouteURL] = useState (props.route.match.params.id)
    const [activeImage, setActiveImage] = useState (0)
    const [activeColorImage, setActiveColorImage] = useState (0)
    const [productSize, setProductSize] = useState (null)
    const [productQuanity, setProductQuanity] = useState (1)
    const [productPrice, setProductPrice] = useState(null)
    const [allproducts, setAllProducts] = useState(null)
    const [isSizesthere, setIsSizesThere] = useState(null)
 
    useEffect(() => {
        window.scrollTo(0, 0);

        axios.get(`https://vestige-2172c.firebaseio.com/newprojectproducts.json`)
        .then(res => {
            const extractData = Object.values(res.data);
            const extractKeys = Object.keys(res.data)

            setAllProducts(extractData)

             const setInitialData = (val) => {
                setIsSizesThere(val.productSpecifications.size ? true : null) 

                console.log(val.productSpecifications.size)
                setProductData(val);
                setProductPrice(parseInt(val.initialPrice))
             }

            extractData.map((val, ind) => { return  props.route.location.pathname === val.productURL ? setInitialData(val) : null;
        })
    })
        .catch(error => console.log(error))
      }, [props.route.location.pathname])

      //CHANGE PRODUCT IMAGE BY COLOR OPTIONS
      const changeImage = (ind) => { setActiveImage(ind) }

      //CHANGE PRODUCT COLOR IMAGE
      const changeColorImage = (ind) => {setActiveColorImage(ind)}

      // CHANGE PRODUCT SIZE
     const changeProductSize = (ind) => {setProductSize(ind)}

     // CHANGE PRODUCT QUANITY
     const changeProductQuanity = (ind, price) => {
         let currentQuanity = {productQuanity}

         let changeQuanity = null;

            if(ind === 'dec' && productQuanity > 1) { setProductQuanity(currentQuanity.productQuanity - 1) }
            if(ind === 'inc') { setProductQuanity(currentQuanity.productQuanity + 1) }
         
     }

     const changeProductPrice = (ind) => {
        setProductPrice(ind)
     }

    const notes = productData.notes;


    let finalPrice = null;
    const copiedPrices = { ...activePrice }
    if(activePrice.discount != 0){
        copiedPrices.price = activePrice.discount;
        finalPrice =  copiedPrices;
    }else {
        finalPrice = activePrice;
    }

    const cartItem = {
        productData: productData,
        productPrice: productPrice,
        productQuanity: productQuanity,
        productSize: productSize,
        activeImage:activeImage
    }

   const multipleMethods = () => {
        props.addItemToLocalStorage(cartItem);
        props.updateCart();
    }

    let recommendProducts = [];
    // RECOMENDED 
    if(productData && allproducts){
        allproducts.forEach((prod, ind) => {
            if(prod.recommend === productData.recommend && prod.productID !== productData.productID){recommendProducts.push(prod)}
       })
    }

    let parfumPreview = null;
    parfumPreview = productData ? <div className="Parfum" >
                                        <div className="Parfum-mainWrapper">
                                            <ImageAndNameParfum productData={productData} activeImage={activeImage} activeColorImage={activeColorImage}
                                             changeColorImage={(ind) => changeColorImage(ind)}/>
                                            <ProductColor  productData={productData} activeImage={activeImage} 
                                            changeImage={(ind) => changeImage(ind)} />
                                            { isSizesthere ? <ProductSize productData={productData} changeProductSize={(ind) => changeProductSize(ind)}
                                            productSize={productSize} /> : null}
                                            <Quanity productData={productData} productPrice={productPrice}
                                            productQuanity={productQuanity} changeProductQuanity={(ind) => changeProductQuanity(ind)}
                                            changeProductPrice={(ind) => changeProductPrice(ind)} />
                                        <ProductButton  productData={productData} toLocalStorage={() => multipleMethods()} 
                                      price={price}
activePrice={activePrice.price} activeDiscount={activePrice.discount} buttonStyle={() => buttonStyle() } />    
                                        </div>
                        
                                        <div className="ArticalHolder">
                                            <ProductDescription key={0} list={productData.productDescription} description={productData.productDescription} 
                                            productData={productData} />
                                            <ProductSpec key={0} specifications={productData.specifications} />
                                            <ProductFaq key={0} productData={productData} />
                                        </div>
                                        <ProductSlider route={props.route} recommendProducts={recommendProducts} />
                                </div> : <div style={{height: '100vh', position: 'relative'}} > <Loader /> </div>;



     
                                

    return parfumPreview
           
}

const mapDispatchToProps = dispatch => ({
    addItemToLocalStorage: (cartObj) => dispatch(action.itemToLocalStorage(cartObj)),
    updateCart: () => dispatch(action.updateCart())
})

export default connect(null, mapDispatchToProps)(Perfum)

const buttonStyle = () => {
  
    return `

        // changed
        align-self: center;
        padding: 12px 40px;
        font-size: 16px;
        margin-bottom: 45px;

        position: relative;
        background-color: transparent;
        margin-top: 7%;
        color: #9c8265;
        font-family: 'Neutra';
        border: 1px solid #9c8265;
        transition: all .15s ease-in;

        @media screen and (min-width: 650px) {
            grid-column: 5 / span 3;
            grid-row: 7 / span 1;
        }

        &::before {
            position: absolute;
            top: -9%;
            left: 1%;
            display: block;
            content: "";
            border: 1px solid #9c8265;
            height: 114%;
            width: 97%;
        }

        &:hover {
            background-color: #e4c7a533;
        }
    `

}

