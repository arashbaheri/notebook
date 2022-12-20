import './index.css'

import { BsHexagonHalf } from 'react-icons/bs'
import { Button } from 'reactstrap'
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
      <div className='navigation-item-container mt-5'>
        {navigationItems.map((item) => {
          return (
            <div
              key={item.id}
              className='d-flex mt-4 cursor-pointer'
              onClick={() => selectNavItemHandler(item.id)}
            >
              {selectTab == item.id && <div className='selected-nav-ribbon' />}
              <div className='nav-icon-container mx-2'>{item.icon}</div>
              <div
                className={`${
                  selectTab == item.id
                    ? 'selected-nav-item mx-2'
                    : 'nav-title-container mx-2'
                }`}
              >
                {item.title}
              </div>
            </div>
          )
        })}
      </div>
      <div className='pro-account-banner mt-2 p-2'>
        <div className='d-flex justify-content-between align-items-center px-2 pt-4'>
          <div className='pro-account-title'>Go Pro</div>
          <div className='pro-account-circle'></div>
        </div>
        <div className='pro-account-subtitle p-2'>
          Enable pro account to access to primuim tools in your task.
        </div>
        <div className='px-2 my-2'>
          <Button color='warning' className='w-100 pro-account-button'>
            Launch now
          </Button>
        </div>
        <div className='pro-account-image-container'>
          <img src='/images/pro-banner.png' width={200} />
        </div>
      </div>
    </>
  )
}

export default Navigation
