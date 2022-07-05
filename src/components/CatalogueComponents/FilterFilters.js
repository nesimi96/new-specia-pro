import React from 'react'
import '../../sass/main.scss'
import { CgCheckR } from "react-icons/cg";

const FilterFilters = (props) => {

    
    const multipleFunc = () => {
        props.closeFilterNav()
        props.changePath()
    }

    return <div className='FilterFilters' onClick={() => multipleFunc()}>
                  <div className='FilterFilters-box'>
                      <div className='FilterFilters-box-check'
                      style={{
                        //backgroundColor: props.active ? 'black' : '#fff', 
                    }}> {props.active ? <CgCheckR style={{color: 'white', backgroundColor: 'black', width: '100%', height: '100%',
                    border: 'none'}} /> : null} </div>
                      <div className='FilterFilters-box-value'>{props.val}</div>
                  </div>
           </div>
}

export default FilterFilters