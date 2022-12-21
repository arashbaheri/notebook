import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import { Col, Row } from 'reactstrap'

import Calender from '../calender'
import Header from '../../layout/header'
import Messages from '../messages'
import Navbar from '../../layout/navbar'
import Notification from '../notification'
import Profile from '../profile'
import Tasks from '../tasks'

const HomePage = () => {
  return (
    <Navbar>
      <Header>
        <Row>
          <Col sm='12' md='6' lg='5'>
            <Calender />
            <Tasks />
          </Col>

          <Col sm='12' md='6' lg='4'>
            <Notification />
            <Messages />
          </Col>

          <Col sm='12' md='6' lg='3'>
            <Profile />
          </Col>
        </Row>
      </Header>
    </Navbar>
  )
}

export default HomePage
