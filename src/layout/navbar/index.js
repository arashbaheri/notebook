import './index.css'

const Navbar = ({ children }) => {
  return (
    <div className='landing-page-container'>
      <div className='navbar-container'>Navbar section</div>
      <div className='content-container'>{children}</div>
    </div>
  )
}

export default Navbar
