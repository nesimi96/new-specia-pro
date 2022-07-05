import React from 'react'
import '../../sass/main.scss'
import { VscArrowRight } from "react-icons/vsc";
import FilterFilters from './FilterFilters';
import { Transition } from 'react-transition-group';

const FilterNav = (props) => {

    const style = { color: "black", fontSize: "1.7em" }

    const filters = ['Najskuplji', 'Najjeftiniji', 'Popusti', 'Najpopularniji', 'Svetski hitovi']
    const category = ['Deca', 'Kuhinja', 'Kupatilo', 'Bašta', 'Masažeri']

    let paramsID = props.route.match.params.id

    let sorted = filters.map((cur, ind) => {

        let active = cur.toLowerCase() === paramsID ? cur : null
    
        return <FilterFilters  key={ind} val={cur} paramsID={paramsID} active={active}
         closeFilterNav={() => props.closeFilterNav()} changePath={() => props.changePath(cur)} /> 
    })

  
    let categorized = category.map((cur, ind) => {
        
        let active = cur.toLowerCase() === paramsID ? cur : null
     
        return <FilterFilters key={ind} paramsID={paramsID} active={active}
        val={cur} closeFilterNav={() => props.closeFilterNav()} changePath={() => props.changePath(cur)} />
    })

    let navOpen = props.navOpen;

    return  <Transition in={navOpen} timeout={1000} mountOnEnter unmountOnExit>
            { state => (

                <div className='FilterNav' onClick={() => props.closeFilterNav()} 
                 style={{
                    width: state === 'entered' ? '100%' : state === 'exiting' ? '0%' : '',
                    animation: state === 'entering' ? 'cartOpening .25s cubic-bezier(.45,.48,0,.97)' : 
                    state === 'exiting' ? 'cartClosing .25s cubic-bezier(.45,.48,0,.97)' : '',
                 }}  >
                        <div className='FilterNav-holder'>
                            <div className='FilterNav-holder-iconHolder'>
                                <div onClick={() => props.closeFilterNav()}  className='FilterNav-holder-iconHolder-icon'> <gg-icon ><VscArrowRight style={style} /></gg-icon></div>
                            </div>
                            <div className='FilterNav-holder-header'>
                                <p>Filtriraj:</p>
                            </div>
                            <div className='FilterNav-holder-sort'
                        style={{
                            display: state === 'exiting' ? 'none' : '',
                            width: state === 'exiting' ? 'none' : '100%',
                        
                        }} >
                                <div  className='FilterNav-holder-sort-header'>SORTIRAJ:</div>
                                {sorted}
                            </div>
                            <div className='FilterNav-holder-sort'
                            style={{
                                display: state === 'exiting' ? 'none' : '',
                                width: state === 'exiting' ? 'none' : '100%',
    
                            }} >
                                <div  className='FilterNav-holder-sort-header'>KATEGORIJA:</div>
                                {categorized}
                            </div>
                        </div>
                </div>
            )}
           </Transition>
}

export default FilterNav;