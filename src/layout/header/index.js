import './index.css'

import { FaRegUserCircle } from 'react-icons/fa'
import { MdNotificationAdd } from 'react-icons/md'

const Header = ({ children }) => {
  return (
    <>
      <div className='d-flex justify-content-between p-4'>
        <div className='user-welcome-message'>Welcome, New Friend !</div>
        <div className='d-flex px-4'>
          <div>
            <MdNotificationAdd size={30} color='#58409e' />
          </div>
          <div className='mx-3'>
            <FaRegUserCircle size={26} color='#58409e' />
          </div>
          <div className='user-email-address'>alien@gmail.com</div>
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default Header
