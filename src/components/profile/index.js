import './index.css'

const Profile = () => {
  return (
    <div className='d-flex flex-column mt-5'>
      <div className='image-container d-flex justify-content-center'>
        <img src='/images/avatar.png' alt='profile' />
      </div>
      <div className='email-container d-flex justify-content-center'>
        <span>Alian@gmail.com</span>
      </div>
      <div className='user-info-container d-flex justify-content-center'>
        <p>Mason Greenwood</p>
      </div>
      <div className='user-activity-container d-flex justify-content-center'>
        <span>Your activity today</span>
      </div>
      <div className='user-activity-container d-flex justify-content-center'>
        <h1>80%</h1>
      </div>
    </div>
  )
}

export default Profile
