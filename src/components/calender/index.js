import './index.css'

import { Calendar } from 'react-modern-calendar-datepicker'
import { useState } from 'react'

const Calender = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: { day: 6, month: 12, year: 2022 },
    to: { day: 14, month: 12, year: 2022 },
  })
  return (
    <>
      <div className='mt-4 mx-2 calender-container'>
        <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          shouldHighlightWeekends
          colorPrimary='#7967b1'
          colorPrimaryLight='#e3def0'
        />
      </div>
    </>
  )
}

export default Calender
