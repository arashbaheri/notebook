import './index.css'

import { BsHexagonHalf } from 'react-icons/bs'
import { navigationItems } from './navigationItems'
import { useState } from 'react'

const Navigation = () => {
  const [selectTab, setSelectedTab] = useState(1)
  const selectNavItemHandler = (id) => {
    setSelectedTab(id)
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <div>
          <BsHexagonHalf size={35} color='#ffcb85' />
        </div>
        <div className='brand-name mx-3'>Hexagon</div>
      </div>
      <div className='navigation-item-container'>
        {navigationItems.map((item) => {
          return (
            <div
              key={item.id}
              className='d-flex mt-5 cursor-pointer'
              onClick={() => selectNavItemHandler(item.id)}
            >
              {selectTab == item.id && (
                <div className='selected-nav-ribbon'/>
              )}
              <div className='nav-icon-container mx-2'>{item.icon}</div>
              <div
                className={`${
                  selectTab == item.id
                    ? 'selected-nav-item mx-3'
                    : 'nav-title-container mx-2'
                }`}
              >
                {item.title}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navigation
