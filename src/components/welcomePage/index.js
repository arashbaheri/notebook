import './index.css'

import { HiOutlineArrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
  const navigate = useNavigate()
  const nextPageHandler = () => {
    navigate('/info')
  }
  return (
    <div className='welcome-page-container'>
      <div className='top-circle'></div>
      <div className='welcome-content-container'>
        <div className='d-flex justify-content-center welcome-image-container'>
          <img src='/images/Checklist.jpg' alt='welcome-icon' width={300} />
        </div>
        <div className='welcome-page-title'>Get things done.</div>
        <div className='welcome-page-sub-title'>
          Just a click away from planning your tasks.
        </div>
      </div>
      <div className='bottom-circle' onClick={nextPageHandler}>
        <div className='h-100 d-flex justify-content-center align-items-center next-icon-container'>
          <HiOutlineArrowRight size={40} color='#fff' />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
