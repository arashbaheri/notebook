import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import { Col, Row } from 'reactstrap'

import Calender from '../calender'
import Header from '../../layout/header'
import Navbar from '../../layout/navbar'
import Notification from '../notification'

const HomePage = () => {
  return (
    <Navbar>
      <Header>
        <Row>
          <Col md='5'>
            <Calender />
          </Col>
          <Col md='4'>
            <Notification />
          </Col>
          <Col md='3'>...</Col>
        </Row>
        {/* <div className='d-flex'>
          <Calender />
          <Notification /> 
          
        </div> */}
      </Header>
    </Navbar>
  )
}

export default HomePage
