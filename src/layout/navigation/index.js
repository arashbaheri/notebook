import './index.css'

import { BsHexagonHalf } from 'react-icons/bs'
import { navigationItems } from './navigationItems'

const Navigation = () => {
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
            <div className='d-flex mt-5'>
              <div className='nav-icon-container mx-2'>{item.icon}</div>
              <div className='nav-title-container mx-2'>{item.title}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navigation
