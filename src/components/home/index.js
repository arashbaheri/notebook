import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import { Col, Row } from 'reactstrap'

import Calender from '../calender'
import Header from '../../layout/header'
import Messages from '../messages'
import Navbar from '../../layout/navbar'
import Notification from '../notification'
import Tasks from '../tasks'

const HomePage = () => {
  return (
    <Navbar>
      <Header>
        <Row>
          <Col md='5'>
            <Calender />
            <Tasks />
          </Col>

          <Col md='4'>
            <Notification />
            <Messages />
          </Col>

          <Col md='3'>...</Col>
        </Row>
      </Header>
    </Navbar>
  )
}

export default HomePage
