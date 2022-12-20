import './index.css'

import Navigation from '../navigation'

const Navbar = ({ children }) => {
  return (
    <div className='landing-page-container'>
      <div className='navbar-container'>
        <Navigation />
      </div>
      <div className='content-container'>{children}</div>
    </div>
  )
}

export default Navbar
