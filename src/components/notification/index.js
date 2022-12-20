import './index.css'

import { Badge, Button } from 'reactstrap'

import { RiEditBoxLine } from 'react-icons/ri'

const Notification = () => {
  return (
    <div className='d-flex flex-column'>
      <div className='notification-container mt-5  d-flex justify-content-between'>
        <h5>Notification</h5>
        <div>
          <Badge color='warning' pill className='p-2'>
            Read all
          </Badge>
        </div>
      </div>
      <div className='d-flex align-items-start new-notification-message-container mt-4'>
        <div className='new-note-logo-container p-2'>
          <RiEditBoxLine size={20} color="#fff"/>
        </div>
        <div className='new-note-title-container'>
          <p>Emily just sent you a task to assign</p>
          <p>18 Aug 2020 - 10:00 AM</p>
          <Button color='warning'>Message now</Button>
          <div className='first-message-circles'></div>
          <div className='second-message-circles'></div>
        </div>
      </div>
    </div>
  )
}

export default Notification
