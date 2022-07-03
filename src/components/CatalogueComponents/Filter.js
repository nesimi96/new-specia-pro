import React from 'react'
import '../../sass/main.scss'

const Filter = (props) => {
    return <div className='Filter'>
                  <div className='Filter-display'>
                     NAJPRODAVANIJI
                  </div>
                  <div onClick={() => props.openFilterNav()} className='Filter-controller'>
                      <div className='Filter-controller-name'>FILTERI</div>
                      <div>

                      </div>
                      <div className='Filter-controller-icon'>
                         <div className='Filter-controller-icon-container one-container'>
                            <div className='Filter-controller-icon-container-circle circle-1'></div>
                        </div>
                         <div className='Filter-controller-icon-container two-container'>
                            <div className='Filter-controller-icon-container-circle circle-2'></div>
                        </div>
                      </div>
                          
                  </div>
            </div>
}

export default Filter;