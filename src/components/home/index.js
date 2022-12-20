import './index.css'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import React, { useState } from 'react'

import { Calendar } from 'react-modern-calendar-datepicker'
import Header from '../../layout/header'
import Navbar from '../../layout/navbar'

const HomePage = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: {day: 6, month: 12, year: 2022},
    to: {day: 14, month: 12, year: 2022},
  })
  {
    console.log(selectedDayRange)
  }
  return (
    <Navbar>
      <Header>
        <div className='mt-4 mx-2 calender-container'>
          <Calendar
            className='calender-style'
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
            colorPrimary="#7967b1"
            colorPrimaryLight="#e3def0"
          />
        </div>
      </Header>
    </Navbar>
  )
}

export default HomePage
