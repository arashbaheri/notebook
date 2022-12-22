import './index.css'

import { Input, InputGroup, InputGroupText } from 'reactstrap'

import { FaRegUserCircle } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import { MdNotificationAdd } from 'react-icons/md'

const Header = ({ children }) => {
  return (
    <>
      <div className='d-flex justify-content-between p-4'>
        <div className='user-welcome-message'>Welcome, New Friend !</div>
        <div className='w-50'>
          <InputGroup size='lg' className='search-input-container'>
            <InputGroupText>
              <GoSearch size={20} color='#58409e' />
            </InputGroupText>
            <Input placeholder='Search in current Projects ...'/>
          </InputGroup>
        </div>
        <div className='d-flex px-4'>
          <div>
            <MdNotificationAdd size={30} color='#58409e' />
          </div>
          <div className='mx-3'>
            <FaRegUserCircle size={26} color='#58409e' />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default Header
