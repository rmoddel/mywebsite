import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const Calendar = () => <div >
  <FullCalendar
    plugins={[ dayGridPlugin,googleCalendarPlugin ]}
    googleCalendarApiKey={`${process.env.GATSBY_GOOGLE_CALENDAR_API_KEY}`}
  eventSources={[
  {
    googleCalendarIdz: `${process.env.GATSBY_GOOGLE_CALENDAR_URL_1}`
  },
  {
    googleCalendarId: `${process.env.GATSBY_GOOGLE_CALENDAR_URL_2}`
  }
  ]}
    weekends={true}
  />
  </div>

export default Calendar;
