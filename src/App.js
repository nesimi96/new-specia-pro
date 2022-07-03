import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import './sass/main.scss';
import Header from './containers/Header/Header';
import Toolbar from './containers/Toolbar/Toolbar';
import Layout from './containers/Layout/Layout';
import Preview from './containers/Preview/Preview';
import TopThree from './components/TopThree/TopThree';
import Brand from './containers/Brand/Brand';
import Info from './containers/Info/Info';
import Checkout from './containers/Checkout/Checkout';
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import OrderSummary from './containers/OrderSummary/OrderSummary';
import About from './containers/About/About';
import Faq from './components/Faq/Faq';
import VestigeOrders from './components/VestigeOrders/VestigeOrders';
import CountryAlert from './components/Backdrop/Alert/CountryAlert/CountryAlert';
import { Route, Switch } from "react-router-dom";
import * as action from './store/actions/index';
import * as actionTypes from './store/actions/actionTypes';
import { connect } from 'react-redux';
import {products} from './data/products'
import axios from 'axios';
import { act } from '@testing-library/react';


// Lazy Loading...
const Parfum = lazy(() => import('./pages/ProductPage'))
const Catalogue =lazy(() => import('./pages/Catalogue'))

const App = props => {

  const [country, setContry] = useState(null);
  const [superDiscounts, setsuperDiscounts] = useState([])
 
  useEffect(() => {
     props.updateStateFromLocalStorage(country);
    }, [props.cartUpdated])

    useEffect(() => {
      axios.get(`https://vestige-2172c.firebaseio.com/newprojectproducts.json`)
      .then(res => {
        const extractData = Object.values(res.data);
        const extractKeys = Object.keys(res.data)

        setsuperDiscounts(extractData)
        
      })
      .catch(err => {
        console.log(err)
      })

    }, [])
    

//// IMPORT PRODUCTS TO DATA BASE

/*
useEffect(() => {
  
  let allProducts = products()

   allProducts.forEach((cur, ind) => {
     axios.post('https://vestige-2172c.firebaseio.com/newprojectproducts.json',cur )
     .then(res => {
   
     }).catch(err => {
       console.log(err)
     })
   })

}, [])
*/
  
  return (
    <Suspense fallback={<div style={{
      height: '100vh', textAlign: 'center'
    }}>Stranica se učitava...</div>}>
        <div className="App">
    

          <Switch>
          <Route exact path="/" render={(props) => {
            return <Layout route={props} >
                      {/*<CountryAlert />*/}
                      <Header route={props} country={country} />
                      <Info />
                      <FilteredProducts route={props} superDiscounts={superDiscounts} />
                      <FilteredProducts route={props} superDiscounts={superDiscounts} />
                      <Brand />
                  </Layout>
          }} />

            <Route strict path="/proizvod/:id" render={(props) => {
              return <Layout route={props}>
                        <Parfum route={props}/>
                    </Layout>
            }} />

      
       { /*<Route exact path="/originalni-testeri-:id/page=:id" render={(props) => {
                  return <Layout route={props}>
                              <Catalogue country={country} route={props}/>
                        </Layout>
                }} />*/}

      <Route exact path="/proizvodi/page=1" render={(props) => {
                        return <Layout route={props}>
                                    <Catalogue route={props}/>
                              </Layout>
                      }} />

    <Route exact path="/proizvodi-:id/page=1" render={(props) => {
                            return <Layout route={props}>
                                        <Catalogue  route={props}/>
                                  </Layout>
                          }} />

        <Route exact path="/checkout" render={(props) => {
                          return <Layout route={props}>
                                    <Info />
                                    <Checkout route={props}/>
                                </Layout>
                        }} />

        <Route exact path="/order-summary" render={(props) => {
                              return <Layout route={props}>
                                        <OrderSummary />
                                    </Layout>
                            }} />

        <Route exact path="/about" render={(props) => {
                                  return <Layout route={props}>
                                            <About />
                                        </Layout>
                                }} />
          <Route exact path="/faq" render={(props) => {
                                  return <Layout route={props}>
                                            <Faq />
                                        </Layout>
                                }} />

<Route exact path="/vestige-orders" render={(props) => {
                                  return <VestigeOrders />
                                }} />
          </Switch>
        </div>
    </Suspense>
  );
}

const mapStateToProps = state => {
  return {
    cartOpen: state.cartOpen,
    cartUpdated: state.cartUpdated,
    countryAlert: state.countryAlert,
    country: state.country,
  }
}

const mapDispatchToProps = dispatch => ({
  updateStateFromLocalStorage: () => dispatch(action.addToCart()),
  updateCart: () => dispatch(action.updateCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
