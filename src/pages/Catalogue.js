import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import '../sass/main.scss';
import Slider from '../components/ProductSlider/Slider';
import Pagination from '../components/Pagination/Pagination';
import Filter from '../components/CatalogueComponents/Filter'
import { connect } from 'react-redux';
import * as action from '../store/actions/actions';
import FilterNav from '../components/CatalogueComponents/FilterNav'

const Catalogue = (props) => {

    const [products, setProducts] = useState(null);
    const [filterNav, setFilterNav] = useState(null)

    useEffect(() => {
       window.scrollTo(0, 0);
       axios.get(`https://vestige-2172c.firebaseio.com/newprojectproducts.json`)
       .then(res => {
           const extractData = Object.values(res.data);
           const extractKeys = Object.keys(res.data)
           
           let prods = extractData;

           let isID = props.route.match.params.id;
           if(isID) {
               prods = filterProducts(extractData, isID)
           }


        setProducts(prods)
         
       })
       .catch(err => {
         console.log(err)
       })


    
    }, [props.route.location.pathname])

    console.log(products)

    const filterProducts = (prod, filter) => {

        let filtered = []

        prod.forEach((cur, ind) => {
            cur.filter.forEach((curFilter, filterInd) => {
                if(curFilter === filter) {filtered.push(cur)}
            })
            
        })

        return filtered
    }

    let renderProducts = <div>loader</div>;
    if(products){
        renderProducts = products.map((cur, ind) => {
            const img = cur.productSpecifications.colors[0].img[0]
            const price = cur.initialPrice;

            return <Slider key={ind} name={cur.productName} img={img} price={price} from={'catalogue'}/>
        })
    }

    const openFilterNav = () => {setFilterNav(true)}
    const closeFilterNav = () => {setFilterNav(null)}
    

    const pathName = props.route.location.pathname

return <div className="Catalogue">
          <FilterNav navOpen={filterNav} closeFilterNav={() => closeFilterNav()}/>
          <div className='Catalogue-header'>

          </div>
          <div className='Catalogue-Filter'>
              <Filter openFilterNav={() => openFilterNav()} />
          </div>
          <div className='Catalogue-Products'>
              <div className='Catalogue-Products-products'>
                  {renderProducts}
              </div>
          </div>
    
       </div>
}

const mapDispatchToProps = dispatch => ({
    addToLocalStorage: (cartObj) => dispatch(action.itemToLocalStorage(cartObj)),
    updateCart: () => dispatch(action.updateCart())
})

export default connect(null, mapDispatchToProps)(Catalogue)


