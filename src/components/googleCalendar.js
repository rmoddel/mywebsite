import React from 'react'
import moment from 'moment'

import BigCalendar from 'react-big-calendar';
import  'react-big-calendar/lib/css/react-big-calendar.css'
//BigCalendar.momentLocalizer(moment);

const Calendar = () => (
  <BigCalendar
    style={{height: '420px'}}
    events={[]}
  />
)

export default Calendar;
