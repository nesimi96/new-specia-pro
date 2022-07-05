import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import '../sass/main.scss';
import Slider from '../components/ProductSlider/Slider';
//import Pagination from '../components/Pagination/Pagination';
import Filter from '../components/CatalogueComponents/Filter'
import { connect } from 'react-redux';
import * as action from '../store/actions/actions';
import FilterNav from '../components/CatalogueComponents/FilterNav'
import FilteredProduct from '../components/FilteredProducts/FilteredProduct';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Catalogue = (props) => {

    const [products, setProducts] = useState(null);
    const [filterNav, setFilterNav] = useState(null);
    const [filters, setFilters] = useState([])

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

            return <div className='Catalogue-Products-products'><FilteredProduct product={cur}  /> </div>
            
        })
    }

    const openFilterNav = () => {setFilterNav(true)}
    const closeFilterNav = () => {setFilterNav(null)}

    const changePath = (cur) => {
        let currentPath = props.route.location.pathname


        if(filters) {
            let copied = [...filters]

            copied.push(cur);
            setFilters(copied)
            console.log(copied)
        }
        //props.route.history.push(`/proizvodi-${cur.toLowerCase(cur.split(' ').join('-'))}/page=1`)
    }
    

    console.log(filters)

    const items = ['Deca', 'Kupatilo', 'Kuhinja', 'Kuća', 'Lampe', 'Ventilatori', 'Masažeri', 'Klime']
    let renderItems = items.map((cur, ind) => {
        return <SwiperSlide> <div className='Catalogue-header-items-item' /*style={{margin: '1% 2%'}}*/>{cur}</div></SwiperSlide>
    })


return <div className="Catalogue">
          <FilterNav navOpen={filterNav} route={props.route} filters={filters}
           closeFilterNav={() => closeFilterNav()} changePath={(cur) => changePath(cur)}/>
          <div className='Catalogue-header'>
              <div className='Catalogue-header-nav'>
                   <div className='Catalogue-header-nav-home'>Početna /</div>
                   <div className='Catalogue-header-nav-label'>Proizvodi</div>
              </div>
              <Swiper className='Catalogue-header-items'
                        modules={[ Scrollbar, A11y]}
                        //spaceBetween={0}
                        slidesPerView={'auto'}        
                        
                        onSwiper={(swiper) => console.log(swiper)}
                 >
              <div>
                          {renderItems}
              </div>
              </Swiper>

          </div>
          <div className='Catalogue-Filter'>
              <Filter openFilterNav={() => openFilterNav()} />
          </div>
          <div className='Catalogue-Products'>
                  {renderProducts}
          </div>
    
       </div>
}


const mapDispatchToProps = dispatch => ({
    addToLocalStorage: (cartObj) => dispatch(action.itemToLocalStorage(cartObj)),
    updateCart: () => dispatch(action.updateCart())
})

export default connect(null, mapDispatchToProps)(Catalogue)


