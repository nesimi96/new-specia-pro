import React from 'react'
import '../../sass/main.scss'

const FilterFilters = (props) => {
    return <div className='FilterFilters'>
                  <div className='FilterFilters-box'>
                      <div className='FilterFilters-box-check'></div>
                      <div className='FilterFilters-box-value'>{props.val}</div>
                  </div>
           </div>
}

export default FilterFilters